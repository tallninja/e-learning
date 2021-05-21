import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as actions from "../../actions";

import LoginForm from "./LoginForm";

class Login extends Component {
  componentDidMount = () => {
    this.props.checkUserAuthentication();
  };

  onFormSubmit = () => {
    this.props.loginUser(this.props.form.loginForm.values);
    // console.log(this.props.form.loginForm.values);
  };

  render() {
    return this.props.auth.status ? (
      <Redirect to="/" />
    ) : (
      <LoginForm onSubmit={this.onFormSubmit} />
    );
  }
}

const mapStateToProps = ({ form, auth }) => {
  return { form, auth };
};

export default connect(mapStateToProps, actions)(Login);
