import React, { Component } from "react";
import { reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

// import TinyEditor from "../materials/TinyEditor";
// import formValidator from "../../utils/formValidator";

import FileUpload from "../FileUpload";
import NoContent from "../noContent";

class NotesForm extends Component {
  render() {
    if (this.props.material) {
      const { subject, title } = this.props.material;

      return (
        <div>
          <h3>Upload Notes</h3>
          <FileUpload
            fileSubject={subject}
            fileTopic={title}
            fileCategory="notes"
            backLink={`/materials/content/${this.props.match.params.id}/notes`}
            onFormSubmit={this.props.onSubmit}
          />
        </div>
      );
    } else {
      return <NoContent />;
    }
  }
}

export default withRouter(
  reduxForm({
    form: "notesForm",
    // validate: formValidator,
    destroyOnUnmount: false,
  })(NotesForm)
);
