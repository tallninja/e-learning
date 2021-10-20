import React, { Component } from "react";
import { Field } from "redux-form";
import subjects from "../../constants/subjects.json";
import { connect } from "react-redux";

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
        <select
          id="select"
          {...field.input}
          value={this.props.form.values ? this.props.form.values.name : ""}
        >
          {field.children}
        </select>
        {this.renderErrorMessage(field.meta)}
      </div>
    );
  };

  renderSubjectsList = () => {
    return Object.entries(subjects).map(([k, v]) => {
      return (
        <option value={k} key={k}>
          {v}
        </option>
      );
    });
  };

  render() {
    const { label, name } = this.props;
    return (
      <Field label={label} name={name} component={this.renderSelectField}>
        {this.props.form.values ? (
          ""
        ) : (
          <option value="" className="ui disabled">
            --Please select a subject--
          </option>
        )}
        {this.renderSubjectsList()}
      </Field>
    );
  }
}

const mapStateToProps = ({ form: { subjectForm } }) => {
  return { form: subjectForm };
};

export default connect(mapStateToProps, null)(Select);
