import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends Component {
  render() {
    return this.props.videoID ? (
      <div className="ui segment">
        <div className="ui embed">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${this.props.videoID}`}
            controls={true}
          />
        </div>
      </div>
    ) : (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
    );
  }
}

export default VideoPlayer;
