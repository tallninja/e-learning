import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import LoginField from "./LoginField";

import "./Login.css";

class LoginFrom extends Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui center aligned header">
            <img
              className="image"
              src={`${process.env.PUBLIC_URL}/images/brand.svg`}
              alt="Logo"
            />{" "}
            Log-in to your account
          </h2>
          <form
            className="ui large error form"
            onSubmit={this.props.handleSubmit(this.props.onSubmit)}
          >
            <div className="ui stacked segment">
              <Field
                name="username"
                type="text"
                placeholder="Username"
                icon="user"
                component={LoginField}
              />
              <Field
                name="password"
                type="password"
                placeholder="Password"
                icon="lock"
                component={LoginField}
              />
              <button className="ui fluid large green submit button">
                Login
              </button>
            </div>
            <div className="ui error message"></div>
          </form>
          <div className="ui message">
            New to us?<a href="#root"> Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: "loginForm", destroyOnUnmount: false })(
  LoginFrom
);
