import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

// import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import SecondaryMenu from "../SecondaryMenu";
import PlaceHolder from "../PlaceHolder";

class VideoMaterials extends Component {
  componentDidMount = () => {
    this.props.fetchVideos(this.props.videoID);
  };

  render = () => {
    if (this.props.materials.material) {
      const { _id, title, videoID } = this.props.materials.material;
      switch (this.props.videos) {
        case null:
          return null;
        case false:
          return <h4>An error occured while fetching the video</h4>;
        default:
          return (
            <React.Fragment>
              <SecondaryMenu active="videos" materialID={_id} />
              <div className="ui container">
                <h3>{title}</h3>
                <VideoPlayer video={this.props.videos[0]} e />
              </div>
            </React.Fragment>
          );
      }
    } else {
      return <PlaceHolder />;
    }
  };
}

const mapStateToProps = ({ videos }) => {
  return { videos };
};

export default connect(mapStateToProps, actions)(VideoMaterials);
