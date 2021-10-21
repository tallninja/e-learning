import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

// import TinyEditor from "../topics/TinyEditor";
// import formValidator from "../../utils/formValidator";

import * as actions from "../../actions";

import FileUpload from "../FileUpload";
import NoContent from "../NoContent";

class NotesForm extends Component {
  componentDidMount = () => {
    this.props.fetchTopic(this.props.match.params.topicID);
  };

  render() {
    if (this.props.topic) {
      const { _id, subject, title } = this.props.topic;

      return (
        <div>
          <h3>Upload Notes</h3>
          <FileUpload
            host={window.location.host}
            contentType="document"
            fileSubject={subject}
            fileTopic={title}
            fileCategory="notes"
            backLink={`/subjects/${subject}/topics/${_id}/notes`}
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

export default withRouter(connect(mapStateToProps, actions)(NotesForm));
