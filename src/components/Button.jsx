import React from "react";

const Button = ({
  variant = "primary", // primary, secondary, outline
  size = "md", // sm, md, lg
  disabled = false,
  type = "button", // button, submit, reset
  onClick,
  className = "",
  children,
}) => {
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const buttonStyles = `
    w-full font-semibold rounded outline-none
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${variantStyles[variant] || variantStyles.primary}
    ${sizeStyles[size] || sizeStyles.md}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonStyles}
    >
      {children}
    </button>
  );
};

export default Button;
