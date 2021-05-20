import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import LoginForm from "./LoginForm";

class Login extends Component {
  onFormSubmit = () => {
    this.props.loginUser(this.props.form.loginForm.values);
    // console.log(this.props.form.loginForm.values);
  };

  render() {
    return <LoginForm onSubmit={this.onFormSubmit} />;
  }
}

const mapStateToProps = ({ form }) => {
  return { form };
};

export default connect(mapStateToProps, actions)(Login);
