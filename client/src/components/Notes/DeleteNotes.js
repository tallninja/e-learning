import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class NotesDelete extends Component {
  componentDidMount = () => {
    this.props.fetchNotes(this.props.match.params.id);
  };

  render() {
    const actions = (
      <React.Fragment>
        <button
          className="ui red button"
          onClick={() => {
            this.props.deleteNotes(
              this.props.notes._id,
              this.props.match.params.id
            );
            history.push(
              `/materials/content/${this.props.match.params.id}/notes`
            );
          }}
        >
          <i className="ui icon trash" />
          Delete
        </button>

        <button
          className="ui button"
          onClick={() =>
            history.push(
              `/materials/content/${this.props.match.params.id}/notes`
            )
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
            title="Delete Stream"
            content="Are you sure you want to delete ?"
            item={this.props.notes.fileName}
            actions={actions}
            onDismiss={() =>
              history.push(
                `/materials/content/${this.props.match.params.id}/notes`
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

const mapStateToProps = ({ notes }) => {
  return { notes: notes.item };
};

export default connect(mapStateToProps, actions)(NotesDelete);
