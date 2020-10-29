import React from "react";

const FormInput = ({ type, name, label, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        className="form-control"
        type={type}
        label={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
