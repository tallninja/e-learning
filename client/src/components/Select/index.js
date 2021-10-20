import React, { Component } from "react";
import { Field } from "redux-form";
import subjects from "./subjects.json";

class Select extends Component {
  renderErrorMessage = (meta) => {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <p>{meta.error}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  renderSelectField = (field) => {
    return (
      <div style={{ marginBottom: "15px" }} className="required field">
        <label htmlFor="select" className="default text">
          {field.label}
        </label>
        <select id="select" {...field.input}>
          {field.children}
        </select>
        {this.renderErrorMessage(field.meta)}
      </div>
    );
  };

  renderSubjectsList = () => {
    return subjects.map((subject) => {
      return (
        <option value={subject.value} key={subject.value}>
          {subject.key}
        </option>
      );
    });
  };

  render() {
    const { label, name } = this.props;
    return (
      <Field label={label} name={name} component={this.renderSelectField}>
        <option value="" className="ui disabled">
          --Please select a subject--
        </option>
        {this.renderSubjectsList()}
      </Field>
    );
  }
}

export default Select;
