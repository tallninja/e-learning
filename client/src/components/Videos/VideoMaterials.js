import React, { Component } from "react";

// import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import NoContent from "../NoContent";

class VideoMaterials extends Component {
  render = () => {
    if (this.props.videoURL) {
      return <VideoPlayer videoURL={this.props.videoURL} />;
    } else {
      return <NoContent text="No videos..." icon="video" />;
    }
  };
}

export default VideoMaterials;
