import React, { Component } from "react";
import InputBox from "./common/inputBox";
import validate from "../utils/validate";

class LoginForm extends Component {
  state = {
    formElements: {
      username: {
        name: "username",
        value: "",
        label: "Username",
        errorMsg: "",
        errorFlg: false,
        schema: "alphaNumeric",
        maxlen: 20,
        minlen: 5,
        required: true,
        type: "text",
      },
      password: {
        name: "password",
        value: "",
        label: "Password",
        errorMsg: "",
        errorFlg: false,
        schema: "password",
        maxlen: 20,
        minlen: 5,
        required: true,
        type: "password",
      },
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    console.log(this.state.formElements);
  };

  validateForm = (e) => {
    console.log(e);
  };

  validateProperty = (formElement) => {
    const valid = validate(formElement);
    const formElements = { ...this.state.formElements };

    formElements[formElement.name].errorFlg =
      valid.flag === true ? false : true;
    formElements[formElement.name].errorMsg =
      valid.flag === true ? "" : valid.message;

    this.setState({ formElements });
    console.log(formElement);
  };

  handleChange = ({ currentTarget: input }) => {
    const formElements = { ...this.state.formElements };
    formElements[input.name].value = input.value;
    this.setState({ formElements });

    this.validateProperty(formElements[input.name]);
  };

  render() {
    return (
      <div className="container pt-5">
        <div className="card mt-5" style={{ width: "50%", margin: "auto" }}>
          <div className="card-body">
            <h1 className="card-title">Login</h1>
            <form onSubmit={this.handleSubmit} className="p-2">
              {Object.keys(this.state.formElements).map((fe) => (
                <InputBox
                  key={fe}
                  fe={this.state.formElements[fe]}
                  onChange={this.handleChange}
                />
              ))}
              <button className="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
