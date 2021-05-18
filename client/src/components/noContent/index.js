import React, { Component } from "react";

import "./NoContent.css";

class NoContent extends Component {
  render() {
    return (
      <div className="ui segment no-content">
        <h4>{this.props.text}</h4>
        {this.props.renderCreateButton ? this.props.renderCreateButton() : null}
      </div>
    );
  }
}

export default NoContent;
