import React, { Component } from "react";
import joi, { Joi } from "joi-browser";
import InputTextbox from "./common/inputTextbox";

class LoginForm extends Component {
  //   usernameRef = React.createRef();

  //   componentDidMount() {
  //     this.usernameRef.current.focus();
  //   }

  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: joi.string().required().label("Username"),
    password: joi.string().required(),
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = joi.validate(this.state.account, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return Object.keys(errors).length === 0 ? null : errors;

    // const errors = {};
    // const { account } = this.state;
    // if (account.username.trim() === "")
    //   errors.username = "Username is required";
    // if (account.password.trim() === "")
    //   errors.password = "Password is required";

    // return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const username = this.usernameRef.current.value;
    // console.log(usernameRef);

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log(e.target);
  };

  validateProperty = ({ name, value }) => {
    // if (name === "username") {
    //   if (value.trim() === "") return "Usrname is required";
    // }
    // if (name === "password") {
    //   if (value.trim() === "") return "Password is required";
    // }

    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  // handleChange = (e) => {
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <InputTextbox
            name="username"
            label="Username"
            value={account.username}
            onChange={this.handleChange}
            type="text"
            error={errors.username}
          />
          <InputTextbox
            name="password"
            label="Password"
            value={account.password}
            onChange={this.handleChange}
            type="password"
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
