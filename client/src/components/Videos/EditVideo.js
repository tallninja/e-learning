import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import PlaceHolder from "../PlaceHolder";

import VideoForm from "./VideoForm";
import VideoReview from "./VideoReview";

class EditVideo extends Component {
  constructor(props) {
    super(props);
    this.state = { showReviewForm: false };
  }

  componentDidMount = () => {
    this.props.fetchVideo(this.props.match.params.id);
  };

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  renderContent = () => {
    const { subjectID, topicID, contentID } = this.props.match.params;
    if (this.props.video.item) {
      const { ytVideoURL } = this.props.video.item;
      if (this.state.showReviewForm) {
        return (
          <VideoReview
            handleBack={() => this.setState({ showReviewForm: false })}
            form={this.props.form}
            action={() => {
              const data = this.props.form.videoForm.values;
              this.props.editVideo({ contentID, data, subjectID, topicID });
            }}
            icon="save icon"
            buttonText="Save Changes"
          />
        );
      } else {
        return (
          <div>
            <h2>Edit Video...</h2>
            <VideoForm
              onSubmit={this.handleSubmit}
              initialValues={{ ytVideoURL }}
            />
          </div>
        );
      }
    } else {
      return <PlaceHolder />;
    }
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = ({ video, form }) => {
  return { video, form };
};

export default connect(mapStateToProps, actions)(EditVideo);
