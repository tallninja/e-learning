import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class DeleteVideo extends Component {
  componentDidMount = () => {
    this.props.fetchVideo(this.props.match.params.id);
  };

  render() {
    const actions = (
      <React.Fragment>
        <button
          className="ui red button"
          onClick={() => {
            this.props.deleteVideo(
              this.props.video._id,
              this.props.match.params.id
            );
            history.push(
              `/materials/content/${this.props.match.params.id}/videos`
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
              `/materials/content/${this.props.match.params.id}/videos`
            )
          }
        >
          Cancel
        </button>
      </React.Fragment>
    );

    if (this.props.video) {
      return (
        <div>
          <Modal
            title="Delete Stream"
            content="Are you sure you want to delete ?"
            item={this.props.video._id}
            actions={actions}
            onDismiss={() =>
              history.push(
                `/materials/content/${this.props.match.params.id}/videos`
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

const mapStateToProps = ({ video }) => {
  return { video: video.item };
};

export default connect(mapStateToProps, actions)(DeleteVideo);
