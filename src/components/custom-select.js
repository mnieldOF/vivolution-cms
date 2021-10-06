import React from "react";
import Select from "react-select";

const CustomSelect = ({
  onChange,
  options,
  value,
  className,
  label,
  id,
  isMulti,
}) => {
  const defaultValue = (options, value) => {
    return options ? options.find((option) => option.value === value) : "";
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Select
        isMulti={isMulti}
        className={className}
        id={id}
        value={defaultValue(options, value)}
        onChange={(value) => onChange(value)}
        options={options}
      />
    </>
  );
};

export default CustomSelect;
