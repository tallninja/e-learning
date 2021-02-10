import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  renderAuthButtons = () => {
    switch (this.props.auth) {
      case null:
        return (
          <a className="ui item" href="/#">
            <div className="ui active tiny centered inline loader"></div>
          </a>
        );
      case false:
        return (
          <React.Fragment>
            <a className="ui item" href="/auth/google">
              <button className="ui google plus button">
                <i className="google icon"></i>
                Login
              </button>
            </a>
          </React.Fragment>
        );
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
        <div className="item">
          <img src={`${process.env.PUBLIC_URL}/images/brand.svg`} alt="brand" />
        </div>
        <Link to="/" className="active item">
          Home
        </Link>
        <div className="right menu">{this.renderAuthButtons()}</div>
      </div>
    );
  }
}

export default Navbar;
