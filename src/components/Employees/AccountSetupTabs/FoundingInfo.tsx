/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FoundingInfoType } from "../../../types";

interface Props {
  data: FoundingInfoType;
  onChange: (data: FoundingInfoType, isValid: boolean) => void;
}

export const FoundingInfo: React.FC<Props> = ({ data, onChange }) => {
  const [form, setForm] = useState<FoundingInfoType>(data);

  useEffect(() => {
    const isValid = !!(
      form.organizationType &&
      form.industryType &&
      form.teamSize &&
      form.establishedYear &&
      form.website.trim() &&
      form.vision.trim()
    );
    onChange(form, isValid);
  }, [form]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    field: keyof FoundingInfoType
  ) => {
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <select
          className="p-2 border rounded"
          value={form.organizationType}
          onChange={(e) => handleChange(e, "organizationType")}
        >
          <option value="">Select Organization Type</option>
          <option value="Private">Private</option>
          <option value="Public">Public</option>
          <option value="Nonprofit">Nonprofit</option>
        </select>

        <select
          className="p-2 border rounded"
          value={form.industryType}
          onChange={(e) => handleChange(e, "industryType")}
        >
          <option value="">Select Industry</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
          <option value="Healthcare">Healthcare</option>
        </select>

        <select
          className="p-2 border rounded"
          value={form.teamSize}
          onChange={(e) => handleChange(e, "teamSize")}
        >
          <option value="">Select Team Size</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-200">51-200</option>
          <option value="200+">200+</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="date"
          className="p-2 border rounded"
          value={form.establishedYear}
          onChange={(e) => handleChange(e, "establishedYear")}
        />

        <input
          type="url"
          className="p-2 border rounded"
          placeholder="Company Website"
          value={form.website}
          onChange={(e) => handleChange(e, "website")}
        />
      </div>

      <textarea
        placeholder="Company Vision"
        className="w-full p-2 border rounded"
        value={form.vision}
        onChange={(e) => handleChange(e, "vision")}
      />
    </div>
  );
};
