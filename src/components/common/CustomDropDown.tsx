import React from "react";

interface Option {
  label: string;
  value: string;
}

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
}

const CustomDropDown: React.FC<Props> = ({
  value,
  onChange,
  options,
  placeholder = "Select",
  className = "",
}) => {
  return (
    <select
      className={`p-2 border rounded ${className}`}
      value={value}
      onChange={onChange}
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default CustomDropDown;
