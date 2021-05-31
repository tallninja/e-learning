import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

import TinyEditor from "../materials/TinyEditor";
import formValidator from "../../utils/formValidator";

class MarkingSchemeForm extends Component {
  render() {
    return (
      <form
        className="ui error form"
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
      >
        <Field
          type="text"
          name="content"
          label="Enter Your Content"
          component={TinyEditor}
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

export default reduxForm({
  form: "markingSchemeForm",
  validate: formValidator,
  destroyOnUnmount: false,
})(MarkingSchemeForm);
