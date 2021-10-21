import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import TinyEditor from "../topics/TinyEditor";
// import formValidator from "../../utils/formValidator";

import * as actions from "../../actions";

import FileUpload from "../FileUpload";
import NoContent from "../NoContent";

class RevisionQuestionsForm extends Component {
  componentDidMount = () => {
    this.props.fetchTopic(this.props.match.params.topicID);
  };

  render() {
    const { subjectID, topicID } = this.props.match.params;
    if (this.props.topic) {
      const { subject, title } = this.props.topic;

      return (
        <div>
          <h3>Upload Notes</h3>
          <FileUpload
            host={window.location.host}
            contentType="document"
            fileSubject={subject}
            fileTopic={title}
            fileCategory="revision-questions"
            backLink={`/subjects/${subjectID}/topics/${topicID}/notes`}
            onFormSubmit={this.props.onSubmit}
          />
        </div>
      );
    } else {
      return <NoContent />;
    }
  }
}

const mapStateToProps = ({ topics }) => {
  return { topic: topics.topic };
};

export default withRouter(
  connect(mapStateToProps, actions)(RevisionQuestionsForm)
);
