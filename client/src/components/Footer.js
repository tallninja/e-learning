import React, { Component } from "react";

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <div style={{ paddingBottom: "30px", textAlign: "center" }}>
        <div className="ui section divider"></div>
        <p className="ui text">Academix &copy; Copyright {year}</p>
      </div>
    );
  }
}

export default Footer;
