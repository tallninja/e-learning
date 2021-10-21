import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class TopicDelete extends Component {
  componentDidMount = () => {
    this.props.fetchTopic(this.props.match.params.topicID);
  };

  render() {
    const actions = (
      <React.Fragment>
        <button
          className="ui red button"
          onClick={() => {
            this.props.deleteTopic(this.props.topic._id);
            history.push(`/subjects/${this.props.match.params.subjectID}`);
          }}
        >
          <i className="ui icon trash" />
          Delete
        </button>

        <button
          className="ui button"
          onClick={() =>
            history.push(`/subjects/${this.props.match.params.subjectID}`)
          }
        >
          Cancel
        </button>
      </React.Fragment>
    );

    if (this.props.topic) {
      return (
        <div>
          <Modal
            title="Delete Topic"
            content="Are you sure you want to delete ?"
            item={this.props.topic.title}
            actions={actions}
            onDismiss={() =>
              history.push(`/subjects/${this.props.match.params.subjectID}`)
            }
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ topics }) => {
  return { topic: topics.topic };
};

export default connect(mapStateToProps, actions)(TopicDelete);
