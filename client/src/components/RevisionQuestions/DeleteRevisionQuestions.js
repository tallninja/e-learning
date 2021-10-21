import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class RevisionQuestionsDelete extends Component {
  componentDidMount = () => {
    this.props.fetchRevisionQuestions(this.props.match.params.topicID);
  };

  render() {
    const { subjectID, topicID, contentID } = this.props.match.params;
    const actions = (
      <React.Fragment>
        <button
          className="ui red button"
          onClick={() => {
            this.props.deleteRevisionQuestions({
              subjectID,
              topicID,
              contentID,
            });
          }}
        >
          <i className="ui icon trash" />
          Delete
        </button>

        <button
          className="ui button"
          onClick={() =>
            history.push(
              `/subjects/${subjectID}/topics/${topicID}/revision_questions`
            )
          }
        >
          Cancel
        </button>
      </React.Fragment>
    );

    if (this.props.revisionQuestions) {
      return (
        <div>
          <Modal
            title="Delete Revision Questions"
            content="Are you sure you want to delete ?"
            item={this.props.revisionQuestions._id}
            actions={actions}
            onDismiss={() =>
              history.push(
                `/subjects/${subjectID}/topics/${topicID}/revision_questions`
              )
            }
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ revisionQuestions }) => {
  return { revisionQuestions: revisionQuestions.item };
};

export default connect(mapStateToProps, actions)(RevisionQuestionsDelete);
