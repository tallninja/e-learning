import React, { Component } from "react";

// import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import NoContent from "../NoContent";

class VideoMaterials extends Component {
  render = () => {
    if (this.props.videoURL) {
      return (
        <div className="ui container">
          <VideoPlayer videoURL={this.props.videoURL} />
        </div>
      );
    } else {
      return <NoContent text="No videos..." icon="video" />;
    }
  };
}

export default VideoMaterials;
