import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import TinyEditor from "../materials/TinyEditor";
// import formValidator from "../../utils/formValidator";

import * as actions from "../../actions";

import FileUpload from "../FileUpload";
import NoContent from "../NoContent";

class RevisionQuestionsForm extends Component {
  componentDidMount = () => {
    this.props.fetchMaterial(this.props.match.params.id);
  };

  render() {
    if (this.props.material) {
      const { subject, title } = this.props.material;

      return (
        <div>
          <h3>Upload Notes</h3>
          <FileUpload
            host={window.location.host}
            contentType="document"
            fileSubject={subject}
            fileTopic={title}
            fileCategory="revision-questions"
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

const mapStateToProps = ({ materials }) => {
  return { material: materials.material };
};

export default withRouter(
  connect(mapStateToProps, actions)(RevisionQuestionsForm)
);