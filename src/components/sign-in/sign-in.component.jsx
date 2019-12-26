import React from "react";

import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  submitHandler = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  changeHandler = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2> I aldready have an account</h2>
        <span> Sign in with your email and password</span>

        <form onSubmit={this.submitHandler}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            changeHandler={this.changeHandler}
            label="email"
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            changeHandler={this.changeHandler}
            label="password"
            required
          />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
