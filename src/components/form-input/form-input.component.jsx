import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ changeHandler, label, ...otherFormProps }) => (
  <div className="group">
    <input
      className="form-input"
      onChange={changeHandler}
      {...otherFormProps}
    />
    {label ? (
      <label
        className={`${
          otherFormProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
