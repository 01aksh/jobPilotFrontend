import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  disabled = false,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 rounded transition duration-200 ${
        disabled ? "bg-gray-400 cursor-not-allowed" : ""
      } ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
