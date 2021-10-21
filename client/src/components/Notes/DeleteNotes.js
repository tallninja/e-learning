import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class NotesDelete extends Component {
  componentDidMount = () => {
    this.props.fetchNotes(this.props.match.params.topicID);
  };

  render() {
    const { subjectID, topicID, contentID } = this.props.match.params;
    const actions = (
      <React.Fragment>
        <button
          className="ui red button"
          onClick={() => {
            this.props.deleteNotes({ contentID, subjectID, topicID });
          }}
        >
          <i className="ui icon trash" />
          Delete
        </button>

        <button
          className="ui button"
          onClick={() =>
            history.push(`/subjects/${subjectID}/topics/${topicID}/notes`)
          }
        >
          Cancel
        </button>
      </React.Fragment>
    );

    if (this.props.notes) {
      return (
        <div>
          <Modal
            title="Delete Notes"
            content="Are you sure you want to delete ?"
            item={this.props.notes.fileName}
            actions={actions}
            onDismiss={() =>
              history.push(`/subjects/${subjectID}/topics/${topicID}/notes`)
            }
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ notes }) => {
  return { notes: notes.item };
};

export default connect(mapStateToProps, actions)(NotesDelete);
