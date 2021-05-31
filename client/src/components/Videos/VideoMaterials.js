import React, { Component } from "react";

// import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";
import NoContent from "../noContent";

class VideoMaterials extends Component {
  render = () => {
    if (this.props.material.videoID) {
      const { title } = this.props.material;
      return (
        <div className="ui container">
          <h3>{title}</h3>
          <VideoPlayer videoID={this.props.videoID} />
        </div>
      );
    } else {
      return <NoContent text="No videos..." icon="video" />;
    }
  };
}

export default VideoMaterials;
