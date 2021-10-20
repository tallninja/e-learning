import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import SubjectField from "../InputField";
import Select from "../Select";
import formValidator from "../../utils/formValidator";

class SubjectForm extends Component {
  render() {
    return (
      <form
        className="ui error form"
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
      >
        <Select name="name" label="Subject Name" />

        <Field
          type="text"
          name="description"
          label="Subject Description"
          placeholder="quote..."
          component={SubjectField}
          required
        />

        <div style={{ margin: "20px" }}>
          <button className="ui right floated teal button">
            Next
            <i className="angle right icon"></i>
          </button>
          <Link to="/" className="ui left floated red button">
            <i className="reply icon"></i>
            Cancel
          </Link>
        </div>
      </form>
    );
  }
}

export default withRouter(
  reduxForm({
    form: "subjectForm",
    validate: formValidator,
    destroyOnUnmount: false,
  })(SubjectForm)
);
