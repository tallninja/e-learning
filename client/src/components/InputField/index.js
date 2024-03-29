import React, { Component } from "react";

class Field extends Component {
  renderErrorMessage(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <p>{meta.error}</p>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const { label, type, name, placeholder, input, meta } = this.props;
    return (
      <div className={`${this.props.required ? "required" : ""} field`}>
        <label>{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          {...input}
        ></input>
        {this.renderErrorMessage(meta)}
      </div>
    );
  }
}

export default Field;
