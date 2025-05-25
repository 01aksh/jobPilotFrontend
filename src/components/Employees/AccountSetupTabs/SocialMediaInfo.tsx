/* eslint-disable react-hooks/exhaustive-deps */
import { PlusCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { SocialMediaLink, SocialMediaType } from "../../../types";

interface Props {
  data: SocialMediaType;
  onChange: (data: SocialMediaType, isValid: boolean) => void;
}

export const SocialMediaInfo: React.FC<Props> = ({ data, onChange }) => {
  const [links, setLinks] = useState<SocialMediaLink[]>(data.links || []);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    validateAndSend();
  }, [links]);

  const handlePlatformChange = (index: number, platform: string) => {
    const updated = [...links];
    updated[index].platform = platform;
    setLinks(updated);
  };

  const handleUrlChange = (index: number, url: string) => {
    const updated = [...links];
    updated[index].url = url;
    setLinks(updated);
  };

  const handleAdd = () => {
    setLinks([...links, { platform: "", url: "" }]);
    setErrors([...errors, ""]);
  };

  const handleRemove = (index: number) => {
    const updated = [...links];
    updated.splice(index, 1);
    setLinks(updated);
  };

  const validateAndSend = () => {
    let valid = true;
    const newErrors = links.map((link) => {
      if (!link.platform || !link.url) {
        valid = false;
        return "Both fields required.";
      }
      const urlRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/;
      if (!urlRegex.test(link.url)) {
        valid = false;
        return "Invalid URL.";
      }
      return "";
    });
    setErrors(newErrors);
    onChange({ links }, valid);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Social Media Profiles</h2>
      {links.map((link, idx) => (
        <div key={idx} className="space-y-1">
          <div className="flex items-center gap-2">
            <select
              className="border p-2 rounded w-[160px]"
              value={link.platform}
              onChange={(e) => handlePlatformChange(idx, e.target.value)}
            >
              <option value="">Select</option>
              <option value="facebook">Facebook</option>
              <option value="twitter">Twitter</option>
              <option value="instagram">Instagram</option>
              <option value="youtube">YouTube</option>
            </select>
            <input
              type="text"
              className="flex-1 p-2 border rounded"
              placeholder="Enter profile URL"
              value={link.url}
              onChange={(e) => handleUrlChange(idx, e.target.value)}
            />
            <button
              type="button"
              className="text-red-600"
              onClick={() => handleRemove(idx)}
            >
              ❌
            </button>
          </div>
          {errors[idx] && <p className="text-sm text-red-500">{errors[idx]}</p>}
        </div>
      ))}
      <button
        type="button"
        className="flex items-center justify-center w-full py-2 text-sm font-medium bg-gray-100 border rounded hover:bg-gray-200"
        onClick={handleAdd}
      >
        <PlusCircle className="w-4 h-4 mr-1" />
        Add New Social Link
      </button>
    </div>
  );
};
