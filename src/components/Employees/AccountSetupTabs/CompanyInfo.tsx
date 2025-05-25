/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { CompanyInfoType } from "../../../types";

interface Props {
  data: CompanyInfoType;
  onChange: (data: CompanyInfoType, isValid: boolean) => void;
}

const MAX_FILE_SIZE_MB = 5;

export const CompanyInfo: React.FC<Props> = ({ data, onChange }) => {
  const [form, setForm] = useState(data);
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const [logoError, setLogoError] = useState("");
  const [bannerError, setBannerError] = useState("");

  const logoInputRef = useRef<HTMLInputElement | null>(null);
  const bannerInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const isValid = !!(
      form.logo &&
      form.banner &&
      form.name.trim() &&
      form.about.trim() &&
      !logoError &&
      !bannerError
    );
    onChange(form, isValid);
  }, [form, logoError, bannerError]);

  const handleFileChange = (file: File, field: keyof CompanyInfoType) => {
    const isFileTooLarge = file.size > MAX_FILE_SIZE_MB * 1024 * 1024;

    if (field === "logo") {
      if (isFileTooLarge) {
        setLogoError("Logo image must be less than 5MB");
        setForm((prev) => ({ ...prev, logo: null }));
        setLogoPreview(null);
      } else {
        setLogoError("");
        setForm((prev) => ({ ...prev, logo: file }));
        setLogoPreview(URL.createObjectURL(file));
      }
    }

    if (field === "banner") {
      if (isFileTooLarge) {
        setBannerError("Banner image must be less than 5MB");
        setForm((prev) => ({ ...prev, banner: null }));
        setBannerPreview(null);
      } else {
        setBannerError("");
        setForm((prev) => ({ ...prev, banner: file }));
        setBannerPreview(URL.createObjectURL(file));
      }
    }
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    field: keyof CompanyInfoType
  ) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFileChange(file, field);
    }
  };

  const renderFileUploadBox = ({
    label,
    field,
    preview,
    error,
    file,
    inputRef,
  }: {
    label: string;
    field: keyof CompanyInfoType;
    preview: string | null;
    error: string;
    file: File | null;
    inputRef: React.RefObject<HTMLInputElement>;
  }) => {
    return (
      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e, field)}
        className={`relative flex flex-col items-center justify-center ${
          field === "logo" ? "w-1/3" : "w-2/3"
        } h-40 p-4 overflow-hidden text-center border-2 border-dashed rounded cursor-pointer bg-gray-50`}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFileChange(file, field);
          }}
        />
        {!preview && (
          <>
            <span className="font-semibold">{label}</span> or drop here
            <p className="px-2 mt-1 text-sm text-gray-500">
              A photo larger than 400 pixels works best. Max photo size is 5MB.
            </p>
          </>
        )}
        {error && (
          <p className="absolute mt-1 text-xs text-red-500 bottom-1">{error}</p>
        )}
        {file && !error && (
          <p className="absolute px-2 mt-1 text-xs text-gray-700 break-words bottom-1">
            {file.name}
          </p>
        )}
        {preview && (
          <img
            src={preview}
            alt={`${field} Preview`}
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <p>
        <label className="text-lg font-semibold">Logo & Banner</label>
      </p>
      <div className="flex w-full space-x-4">
        {renderFileUploadBox({
          label: "Upload Logo",
          field: "logo",
          preview: logoPreview,
          error: logoError,
          file: form.logo,
          inputRef: logoInputRef,
        })}

        {renderFileUploadBox({
          label: "Upload Banner",
          field: "banner",
          preview: bannerPreview,
          error: bannerError,
          file: form.banner,
          inputRef: bannerInputRef,
        })}
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium">Company Name</label>
        <input
          type="text"
          placeholder="Company name"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, name: e.target.value }))
          }
        />
        {form.name.trim() === "" && (
          <span className="mt-1 text-xs text-red-500">
            Company name is required
          </span>
        )}
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium">About Us</label>
        <textarea
          placeholder="About Us"
          className="w-full p-2 border rounded"
          value={form.about}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, about: e.target.value }))
          }
        />
        {form.about.trim() === "" && (
          <span className="mt-1 text-xs text-red-500">
            About Us is required
          </span>
        )}
      </div>
    </div>
  );
};
