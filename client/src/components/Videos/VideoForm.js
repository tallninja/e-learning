import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import MaterialField from "../materials/MaterialField";
import formValidator from "../../utils/formValidator";

class VideoForm extends Component {
  render() {
    return (
      <form
        className="ui error form"
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
      >
        <Field
          type="text"
          name="ytVideoID"
          label="Youtube Video ID"
          placeholder="ID"
          component={MaterialField}
          required
        />

        <div style={{ margin: "20px" }}>
          <button className="ui right floated teal button">
            Next
            <i className="angle right icon"></i>
          </button>
          <Link
            to={`/materials/content/${this.props.match.params.id}/videos`}
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

export default withRouter(
  reduxForm({
    form: "videoForm",
    validate: formValidator,
    destroyOnUnmount: false,
  })(VideoForm)
);
