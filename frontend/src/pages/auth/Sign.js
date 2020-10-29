import React, { Component } from "react";
import CustomButton from "../../components/button/CustomButton";
import FormInput from "../../components/form-input/FormInput";

export class Sign extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { email, password } = this.state;
    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "80vh",
        }}
      >
        <div className="card" style={{ height: "400px", width: "500px" }}>
          <div className="card-header text-center">
            <h3>USER SIGN IN</h3>
          </div>
          <div className="card-body">
            <form>
              <FormInput
                type="email"
                name="email"
                label="Email"
                value={email}
                onChange={this.onChangeHandler}
              />
              <FormInput
                type="password"
                name="password"
                label="Password"
                value={password}
                onChange={this.onChangeHandler}
              />
              <CustomButton type="submit">Submit</CustomButton>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Sign;
