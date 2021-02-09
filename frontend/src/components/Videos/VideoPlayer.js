import React, { Component } from "react";
import ReactPlayer from "react-player";

class VideoPlayer extends Component {
  render() {
    return this.props.video ? (
      <div className="ui segment">
        <div className="ui embed">
          {/* <iframe
            title="video-player"
            src={`https://www.youtube.com/embed/${this.props.video.id}`}
          ></iframe> */}
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${this.props.video.id}`}
          />
        </div>

        <div className="ui segment">
          <h4 className="ui header">{this.props.video.snippet.title}</h4>
          <p className="ui content">{this.props.video.snippet.description}</p>
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
