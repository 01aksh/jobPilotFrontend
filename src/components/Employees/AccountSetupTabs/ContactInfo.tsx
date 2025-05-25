/* eslint-disable react-hooks/exhaustive-deps */
import { ChevronDown, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";

interface ContactInfoType {
  mapLocation: string;
  phoneCode: string;
  phoneNumber: string;
  email: string;
}

interface Props {
  data: ContactInfoType;
  onChange: (data: ContactInfoType, isValid: boolean) => void;
  onPrevious?: () => void;
}

const countries = [
  { code: "+1", label: "US", flag: "🇺🇸" },
  { code: "+44", label: "UK", flag: "🇬🇧" },
  { code: "+91", label: "IN", flag: "🇮🇳" },
  { code: "+880", label: "BD", flag: "🇧🇩" },
];

export const ContactInfo: React.FC<Props> = ({ data, onChange }) => {
  const [form, setForm] = useState(data);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const isValid =
      form.mapLocation.trim() !== "" &&
      form.phoneNumber.trim() !== "" &&
      form.email.includes("@");
    onChange(form, isValid);
  }, [form]);

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const selectCountry = (code: string) => {
    setForm({ ...form, phoneCode: code });
    setShowDropdown(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium">Map Location</label>
        <input
          type="text"
          className="w-full p-2 mt-1 border rounded"
          value={form.mapLocation}
          onChange={(e) => handleChange("mapLocation", e.target.value)}
        />
      </div>

      <div>
        <label className="text-sm font-medium">Phone</label>
        <div className="flex items-center mt-1 border rounded">
          <div
            className="relative flex items-center px-2 cursor-pointer"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <span className="mr-1">
              {countries.find((c) => c.code === form.phoneCode)?.flag || "🌐"}
            </span>
            <span>{form.phoneCode}</span>
            <ChevronDown className="w-4 h-4 ml-1" />
            {showDropdown && (
              <div className="absolute left-0 z-10 bg-white border rounded shadow top-10 w-28">
                {countries.map((c) => (
                  <div
                    key={c.code}
                    className="px-2 py-1 cursor-pointer hover:bg-gray-100"
                    onClick={() => selectCountry(c.code)}
                  >
                    {c.flag} {c.code}
                  </div>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            className="flex-1 p-2 outline-none"
            placeholder="Phone number.."
            value={form.phoneNumber}
            onChange={(e) => handleChange("phoneNumber", e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium">Email</label>
        <div className="relative mt-1">
          <input
            type="email"
            className="w-full p-2 pl-10 border rounded"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <Mail className="absolute w-4 h-4 text-gray-500 transform -translate-y-1/2 left-3 top-1/2" />
        </div>
      </div>
    </div>
  );
};
