import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Spinner from "../Spinner";

class ProtectedRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props;

    switch (this.props.auth.status) {
      case null:
        return <Spinner size="large" />;
      case false:
        return (
          <Route {...props} render={(props) => <Redirect to="/login" />} />
        );
      default:
        return (
          <Route {...props} render={(props) => <Component {...props} />} />
        );
    }
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
