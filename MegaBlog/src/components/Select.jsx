import React, { useId } from "react";
function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div>
      {label && (
        <label htmlFor={id} className="">
          {" "}
        </label>
      )}
      <select
        name=""
        id="id"
        {...props}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200     ${className}`}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);
