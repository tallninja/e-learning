import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

// import TinyEditor from "../materials/TinyEditor";
// import formValidator from "../../utils/formValidator";

import FileUpload from "../FileUpload";

class NotesForm extends Component {
  render() {
    return (
      <div>
        <h3>Upload Notes</h3>
        <FileUpload
          fileSubject="Mathematics"
          fileTopic="Integers"
          fileCategory="notes"
          backLink={`/materials/content/${this.props.match.params.id}/notes`}
          onFormSubmit={this.props.onSubmit}
        />
      </div>
    );
  }
}

export default withRouter(
  reduxForm({
    form: "notesForm",
    // validate: formValidator,
    destroyOnUnmount: false,
  })(NotesForm)
);
