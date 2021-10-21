import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class MarkingSchemeDelete extends Component {
  componentDidMount = () => {
    this.props.fetchMarkingScheme(this.props.match.params.topicID);
  };

  render() {
    const { subjectID, topicID, contentID } = this.props.match.params;
    const actions = (
      <React.Fragment>
        <button
          className="ui red button"
          onClick={() => {
            this.props.deleteMarkingScheme({
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
              `/subjects/${subjectID}/topics/${topicID}/marking_scheme`
            )
          }
        >
          Cancel
        </button>
      </React.Fragment>
    );

    if (this.props.markingScheme) {
      return (
        <div>
          <Modal
            title="Delete Stream"
            content="Are you sure you want to delete ?"
            item={this.props.markingScheme._id}
            actions={actions}
            onDismiss={() =>
              history.push(
                `/subjects/${subjectID}/topics/${topicID}/marking_scheme`
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

const mapStateToProps = ({ markingScheme }) => {
  return { markingScheme: markingScheme.item };
};

export default connect(mapStateToProps, actions)(MarkingSchemeDelete);
