import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  renderAuthButtons = () => {
    switch (this.props.auth.status) {
      case null:
        return (
          <a className="ui item" href="/#">
            <div className="ui active tiny centered inline loader"></div>
          </a>
        );
      case false:
        return null;
      default:
        return (
          <React.Fragment>
            <Link className="ui item" to="/dashboard" key="1">
              <i className="dashboard icon"></i>
              Dashboard
            </Link>
            <a className="ui item" href="/auth/logout" key="2">
              <i className="sign-out icon"></i>
              Logout
            </a>
          </React.Fragment>
        );
    }
  };

  render() {
    return (
      <div className="ui massive top secondary pointing menu">
        <Link to="/" className="active item">
          Home
        </Link>
        <div className="right menu">{this.renderAuthButtons()}</div>
      </div>
    );
  }
}

export default Navbar;
