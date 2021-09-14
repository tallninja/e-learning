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
    this.props.fetchVideo(this.props.match.params.id);
  };

  renderAuthButtons = () => {
    if (this.props.user) {
      if (this.props.user.isAdmin) {
        return (
          <div className="ui two top attached buttons">
            <Link
              to={`/materials/content/${this.props.match.params.id}/videos/edit`}
              className="ui teal button"
            >
              <i className="edit icon"></i>
              Edit
            </Link>
            <Link
              to={`/materials/content/${this.props.match.params.id}/videos/delete`}
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
    if (this.props.user.isAdmin) {
      return (
        <Link
          to={`/materials/content/${this.props.match.params.id}/videos/new`}
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
    switch (this.props.video) {
      case null:
        return <PlaceHolder />;
      case false:
        return (
          <React.Fragment>
            <SecondaryMenu
              active="videos"
              materialID={this.props.match.params.id}
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
                materialID={this.props.match.params.id}
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
