import React from "react";
import PropTypes from "prop-types";

const FormField = ({
  key,
  label,
  required,
  type,
  placeholder,
  disabled,
  autocomplete,
  value,
}) => {
  let disabledClass = "";
  if (disabled) {
    disabledClass = "disabled";
  }
  let labelClasses = "label " + disabledClass + " ";
  let inputClasses = "body1 " + disabledClass + " ";
  return (
    <section>
      <label htmlFor={key} className={labelClasses}>
        {label}
        <input
          value={value}
          className={inputClasses}
          name={key}
          type={type}
          placeholder={placeholder}
          autoComplete={autocomplete}
          required={required}
        />
        {/* ET - TODO: password show/hide toggle */}
        {/* <span></span> */}
      </label>
      {/* ET - TODO: error list */}
      {/* <ul>
        <li></li>
      </ul> */}
    </section>
  );
};

FormField.propTypes = {
  key: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  autocomplete: PropTypes.string,
};

export default FormField;
