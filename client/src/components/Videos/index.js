import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

import VideoMaterials from "./VideoMaterials";
import SecondaryMenu from "../SecondaryMenu";
import PlaceHolder from "../PlaceHolder";
import NoContent from "../NoContent";

class Videos extends Component {
  componentDidMount = () => {
    this.props.fetchVideo(this.props.match.params.topicID);
  };

  renderAuthButtons = () => {
    const { subjectID, topicID } = this.props.match.params;
    const contentID = this.props.video._id;
    if (this.props.user) {
      if (this.props.user.isAdmin) {
        return (
          <div className="ui two top attached buttons">
            <Link
              to={`/subjects/${subjectID}/topics/${topicID}/videos/${contentID}/edit`}
              className="ui teal button"
            >
              <i className="edit icon"></i>
              Edit
            </Link>
            <Link
              to={`/subjects/${subjectID}/topics/${topicID}/videos/${contentID}/delete`}
              className="ui orange button"
            >
              <i className="trash icon"></i>
              Delete
            </Link>
          </div>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  renderCreateButton = () => {
    const { subjectID, topicID } = this.props.match.params;
    if (this.props.user.isAdmin) {
      return (
        <Link
          to={`/subjects/${subjectID}/topics/${topicID}/videos/new`}
          className="ui green button"
        >
          <i className="plus icon"></i>
          Create
        </Link>
      );
    } else {
      return null;
    }
  };

  render() {
    const { subjectID, topicID } = this.props.match.params;
    switch (this.props.video) {
      case null:
        return <PlaceHolder />;
      case false:
        return (
          <React.Fragment>
            <SecondaryMenu
              active="videos"
              subjectID={subjectID}
              topicID={topicID}
              contentID={this.props.video._id}
            />
            <NoContent
              text="No Video..."
              icon="video"
              renderCreateButton={this.renderCreateButton}
            />
          </React.Fragment>
        );
      default:
        if (this.props.video.materialID === this.props.match.params.id) {
          const { ytVideoURL } = this.props.video;
          return (
            <React.Fragment>
              <SecondaryMenu
                active="videos"
                subjectID={subjectID}
                topicID={topicID}
                contentID={this.props.video._id}
              />
              {this.renderAuthButtons()}
              <div className="ui attached segment">
                <VideoMaterials videoURL={ytVideoURL} />
              </div>
            </React.Fragment>
          );
        } else {
          return null;
        }
    }
  }
}

const mapStateToProps = ({ user, video }) => {
  return { user, video: video.item };
};

export default connect(mapStateToProps, actions)(Videos);
