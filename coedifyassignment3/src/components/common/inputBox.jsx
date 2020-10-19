import React, { Component } from "react";

class InputBox extends Component {
  render() {
    const { fe, onChange } = this.props;
    return (
      <div className="form-group" key={fe.name}>
        <h5>
          <label htmlFor={fe.name}>{fe.label}</label>
        </h5>
        <input
          type={fe.type}
          className="form-control"
          id={fe.name}
          name={fe.name}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default InputBox;
