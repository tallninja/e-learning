import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class ProtectedRoute extends Component {
  render() {
    const { component: Component, ...props } = this.props;
    return (
      <Route
        {...props}
        render={(props) =>
          this.props.auth.status ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, null)(ProtectedRoute);
