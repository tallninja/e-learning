import React, { Component } from "react";

import "./NoContent.css";

class NoContent extends Component {
  render() {
    return (
      <div className="ui placeholder segment no-content">
        <div className="ui icon header">
          <i className={`${this.props.icon} file outline icon`}></i>
          {this.props.text}
        </div>
        {this.props.renderCreateButton ? this.props.renderCreateButton() : null}
      </div>
    );
  }
}

export default NoContent;
