import React from "react";

const Description = ({ type, name, value, onChange, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea
        className="form-control"
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Description;
