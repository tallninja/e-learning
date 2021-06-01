import React, { Component, Fragment } from "react";

class LoginField extends Component {
  state = { password: true };

  renderField = () => {
    const { name, placeholder, type, icon, input } = this.props;
    if (type === "password") {
      return (
        <div className="field">
          <div className="ui left icon action input">
            <i className="key icon"></i>
            <input
              name={name}
              placeholder={placeholder}
              type={this.state.password ? "password" : "text"}
              {...input}
            />
            <div
              className="ui icon button"
              onClick={() => this.setState({ password: !this.state.password })}
            >
              <i
                className={`eye ${
                  this.state.password ? "" : "slash"
                } large icon`}
              ></i>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="field">
          <div className="ui left icon input">
            <i className={`${icon} icon`}></i>
            <input
              name={name}
              placeholder={placeholder}
              type={type}
              {...input}
            />
          </div>
        </div>
      );
    }
  };

  render() {
    return <Fragment>{this.renderField()}</Fragment>;
  }
}

export default LoginField;
