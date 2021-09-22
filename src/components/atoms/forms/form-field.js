import React from "react";
// eslint-disable-next-line no-unused-vars
import styles from "./style.scss";
import PropTypes from "prop-types";

const FormField = ({
  key,
  label,
  required,
  type,
  placeholder,
  disabled,
  autocomplete,
}) => {
    let classes = ' ' + disabled + ' ';
  return (
    <section className={classes}>
      <label htmlFor={key}>
        { label }
        <input type={type} placeholder={placeholder} autoComplete={autocomplete} required={required}></input>
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
}

export default FormField;
