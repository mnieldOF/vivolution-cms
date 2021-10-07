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
  onBlur,
  error,
  touched,
  required,
}) => {
  const handleChane = (value) => {
    onChange(id, value);
  };

  const handleBlur = () => {
    onBlur(id, true);
  };

  return (
    <>
      <label htmlFor={id}>
        {label}
        {required ? "*" : null}
      </label>
      <Select
        isMulti={isMulti}
        className={className}
        id={id}
        value={value}
        onBlur={handleBlur}
        onChange={handleChane}
        options={options}
      />
      {!!error && touched && (
        <div style={{ color: "red", marginTop: ".5rem" }}>{error}</div>
      )}
    </>
  );
};

export default CustomSelect;
