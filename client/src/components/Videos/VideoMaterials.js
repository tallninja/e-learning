import React, { Component } from "react";

// import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import NoContent from "../noContent";

class VideoMaterials extends Component {
  render = () => {
    if (this.props.videoID) {
      return (
        <div className="ui container">
          <VideoPlayer videoID={this.props.videoID} />
        </div>
      );
    } else {
      return <NoContent text="No videos..." icon="video" />;
    }
  };
}

export default VideoMaterials;
