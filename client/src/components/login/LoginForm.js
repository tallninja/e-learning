import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import LoginField from "./LoginField";

import "./Login.css";

class LoginFrom extends Component {
  renderErrorMessage = () => {
    if (this.props.login.message) {
      return (
        <div className="ui error message">
          <div className="header">Login Failed !</div>
          <p>{this.props.login.message}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  renderButtonText = () => {
    return "Login";
  };

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui center aligned header">
            <img
              className="image"
              src={`https://s3.af-south-1.amazonaws.com/machakos.kisomoview/images/brand.svg`}
              alt="Logo"
            />{" "}
            <div>Log-in to your account</div>
          </h2>
          <form
            className="ui large error form"
            onSubmit={this.props.handleSubmit(this.props.onSubmit)}
          >
            <div className="ui stacked segment">
              {this.renderErrorMessage()}
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
                {this.renderButtonText()}
              </button>
            </div>
            <div className="ui error message"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: "loginForm" })(LoginFrom);
