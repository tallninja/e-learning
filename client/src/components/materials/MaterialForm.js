import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";

import MaterialField from "./MaterialField";
import SubjectSelect from "./SubjectSelect";
import formValidator from "../../utils/formValidator";

class MaterialForm extends Component {
  render() {
    return (
      <form
        className="ui error form"
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
      >
        <Field
          type="text"
          name="title"
          label="Title"
          placeholder="Material Title"
          component={MaterialField}
          required
        />

        <SubjectSelect name="subject" label="Subject" />

        <div style={{ margin: "20px" }}>
          <button className="ui right floated teal button">
            Next
            <i className="angle right icon"></i>
          </button>
          <Link
            to={`/materials/${this.props.subject}/all`}
            className="ui left floated red button"
          >
            <i className="reply icon"></i>
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "materialForm",
  validate: formValidator,
  destroyOnUnmount: false,
})(MaterialForm);
