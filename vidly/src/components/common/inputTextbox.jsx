import React from "react";

const InputTextbox = ({ name, label, value, error, onChange, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //   autoFocus //to auto focus the dom element
        //   ref={this.usernameRef}
        id={name}
        name={name}
        value={value}
        type={type}
        className="form-control"
        onChange={onChange}
      />
      {error && <div className="alter alert-danger">{error}</div>}
    </div>
  );
};

export default InputTextbox;
