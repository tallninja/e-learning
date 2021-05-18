import React, { Component } from "react";

import "./NoContent.css";

class NoContent extends Component {
  render() {
    return (
      <div className="ui placeholder segment no-content">
        <div class="ui icon header">
          <i class={`${this.props.icon} file outline icon`}></i>
          {this.props.text}
        </div>
        {this.props.renderCreateButton ? this.props.renderCreateButton() : null}
      </div>
    );
  }
}

export default NoContent;
