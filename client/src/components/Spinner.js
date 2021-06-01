import React, { Component } from "react";

class Spinner extends Component {
  render() {
    return (
      <div className="ui segment">
        <div className="ui active dimmer">
          <div className={`ui ${this.props.size} text loader`}>Loading</div>
        </div>
        <p></p>
      </div>
    );
  }
}

export default Spinner;
