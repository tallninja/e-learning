import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import VideoForm from "./VideoForm";
import VideoReview from "./VideoReview";

class CreateVideo extends Component {
  constructor(props) {
    super(props);

    this.state = { showReviewForm: false };
  }

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  render() {
    const { subjectID, topicID } = this.props.match.params;
    if (!this.state.showReviewForm) {
      return (
        <div>
          <VideoForm onSubmit={this.handleSubmit} />
        </div>
      );
    } else {
      return (
        <VideoReview
          handleBack={() => this.setState({ showReviewForm: false })}
          form={this.props.form}
          action={() => {
            const video = this.props.form.videoForm.values;
            video.subject = subjectID;
            video.topic = topicID;
            this.props.createVideo(video);
          }}
          icon="paper plane icon"
          buttonText="Create"
        />
      );
    }
  }
}

const mapStateToProps = ({ form }) => {
  return { form };
};

export default connect(mapStateToProps, actions)(CreateVideo);
