import React, { Component } from "react";
// import "./Footer.css";

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <div
        className="footer"
        style={{ textAlign: "center", paddingBottom: "20px" }}
      >
        <div className="ui section divider"></div>
        <p className="ui text">Academix &copy; Copyright {year}</p>
      </div>
    );
  }
}

export default Footer;
