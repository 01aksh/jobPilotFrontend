/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { FoundingInfoType } from "../../../types";

import {
  industryTypeOptions,
  organizationTypeOptions,
  teamSizeOptions,
} from "../../../utils/constants";
import CustomDropDown from "../../common/CustomDropDown";

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
        <CustomDropDown
          value={form.organizationType}
          onChange={(e) => handleChange(e, "organizationType")}
          options={organizationTypeOptions}
          placeholder="Select Organization Type"
        />

        <CustomDropDown
          value={form.industryType}
          onChange={(e) => handleChange(e, "industryType")}
          options={industryTypeOptions}
          placeholder="Select Industry"
        />

        <CustomDropDown
          value={form.teamSize}
          onChange={(e) => handleChange(e, "teamSize")}
          options={teamSizeOptions}
          placeholder="Select Team Size"
        />
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
