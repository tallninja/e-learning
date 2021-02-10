import React, { Component } from "react";
import { Field } from "redux-form";

class SubjectSelect extends Component {
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
        <label htmlFor="subject-select" className="default text">
          {field.label}
        </label>
        <select id="subject-select" {...field.input}>
          {field.children}
        </select>
        {this.renderErrorMessage(field.meta)}
      </div>
    );
  };

  render() {
    const { label, name } = this.props;
    return (
      <Field label={label} name={name} component={this.renderSelectField}>
        <option value="" className="ui disabled">
          --Please select a subject--
        </option>
        <option value="Mathematics">Mathematics</option>
        <option value="Chemistry">Chemistry</option>
        <option value="Physics">Physics</option>
        <option value="Biology">Biology</option>
        <option value="English">English</option>
        <option value="Kiswahili">Kiswahili</option>
        <option value="History">History</option>
        <option value="Geography">Geography</option>
        <option value="Business">Business</option>
      </Field>
    );
  }
}

export default SubjectSelect;
