import React, { Component } from "react";

class LoginField extends Component {
  render() {
    const { name, placeholder, type, icon, input } = this.props;
    return (
      <div className="field">
        <div className="ui left icon input">
          <i className={`${icon} icon`}></i>
          <input name={name} placeholder={placeholder} type={type} {...input} />
        </div>
      </div>
    );
  }
}

export default LoginField;
