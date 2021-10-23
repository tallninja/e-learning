import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <div className="ui container">
        <img
          src={`${process.env.PUBLIC_URL}/images/learning.svg`}
          style={{ backgroundSize: "auto" }}
        ></img>
      </div>
    );
  }
}

export default Hero;
