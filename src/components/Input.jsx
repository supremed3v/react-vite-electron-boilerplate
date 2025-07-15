import React, { useState, useEffect } from "react";
import Button from "./Button";

const Input = ({
  className = "",
  label,
  type = "text",
  name,
  readOnly,
  placeholder,
  value,
  onChange,
  disabled = false,
  onBlur,
  maxLength,
  inputClass = "",
  options = [],
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [filePreviews, setFilePreviews] = useState([]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputStyles = `w-full px-[0.7rem] py-[0.65rem] placeholder-[#9499A14D] text-body text-xs md:text-sm rounded outline-none ${
    disabled || readOnly ? "bg-light-gray" : "border border-body"
  } ${inputClass}`;

  useEffect(() => {
    if (type === "file" && value) {
      const files = Array.isArray(value) ? value : [value];
      const previews = files.map((file) => ({
        name: file.name,
        size: (file.size / 1024).toFixed(2), // Size in KB
        url: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
        type: file.type,
      }));
      setFilePreviews(previews);
      // Cleanup URLs to prevent memory leaks
      return () =>
        previews.forEach(
          (preview) => preview.url && URL.revokeObjectURL(preview.url)
        );
    } else {
      setFilePreviews([]);
    }
  }, [value, type]);

  return (
    <div className={`w-full overflow-hidden mb-4 ${className}`}>
      <label className="block mb-1 text-body text-sm md:text-base font-semibold">
        {label}
      </label>

      {type === "select" ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onBlur={onBlur}
          className={inputStyles}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "textarea" ? (
        <textarea
          name={name}
          readOnly={readOnly}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onBlur={onBlur}
          maxLength={maxLength}
          className={`${inputStyles} min-h-[100px]`}
        />
      ) : type === "password" ? (
        <div className="relative">
          <input
            name={name}
            readOnly={readOnly}
            type={showPassword ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            onBlur={onBlur}
            maxLength={maxLength}
            className={inputStyles}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={togglePasswordVisibility}
            disabled={disabled || readOnly}
            className="!w-auto px-2"
          >
            {showPassword ? "Hide" : "Show"}
          </Button>
        </div>
      ) : type === "file" ? (
        <div>
          <input
            name={name}
            type="file"
            onChange={(e) => {
              const files = multiple
                ? Array.from(e.target.files)
                : e.target.files[0];
              onChange({ target: { name, files } });
            }}
            disabled={disabled}
            onBlur={onBlur}
            multiple={multiple}
            className={`${inputStyles} placeholder-[#9499A14D] file:mr-4 file:py-1 file:px-3 file:rounded file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100`}
          />
          {filePreviews.length > 0 && (
            <div className="mt-2">
              {filePreviews?.map((preview, index) => (
                <div key={index} className="flex items-center space-x-2 mb-2">
                  {preview.url ? (
                    <img
                      src={preview.url}
                      alt={preview.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  ) : (
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded">
                      <span className="text-xs text-gray-600">File</span>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-gray-700">{preview.name}</p>
                    <p className="text-xs text-gray-500">{preview.size} KB</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <input
          name={name}
          readOnly={readOnly}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onBlur={onBlur}
          maxLength={maxLength}
          className={inputStyles}
        />
      )}
    </div>
  );
};

export default Input;
