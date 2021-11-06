import React, { Component } from "react";
import ReactPlayer from "react-player";
class VideoPlayer extends Component {
  render() {
    return this.props.videoURL ? (
      <div className="ui embed">
        <ReactPlayer
          url={this.props.videoURL}
          controls={true}
          pip={true}
          stopOnUnmount={false}
          width="100%"
          height="100%"
        />
      </div>
    ) : (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
    );
  }
}

export default VideoPlayer;
