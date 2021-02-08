import React from "react";

const VideoPlayer = (props) => {
  return props.video ? (
    <div className="ui segment">
      <div className="ui embed">
        <iframe
          title="video-player"
          src={`https://www.youtube.com/embed/${props.video.id}`}
        ></iframe>
      </div>

      <div className="ui segment">
        <h4 className="ui header">{props.video.snippet.title}</h4>
        <p className="ui content">{props.video.snippet.description}</p>
      </div>
    </div>
  ) : (
    <div className="ui active inverted dimmer">
      <div className="ui text loader">Loading</div>
    </div>
  );
};

export default VideoPlayer;
