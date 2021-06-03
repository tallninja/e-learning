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
        <div className="item" style={{ paddingBottom: 0 }}>
          <img
            src={`https://s3.af-south-1.amazonaws.com/machakos.kisomoview/images/brand.svg`}
            alt="brand"
          />
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
