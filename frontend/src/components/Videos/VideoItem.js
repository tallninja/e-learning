import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
  onItemClick = () => {
    this.props.onVideoClick(this.props.video);
  };

  render() {
    return (
      <div className="image-item item" onClick={this.onItemClick}>
        <img
          className="ui image"
          src={this.props.video.snippet.thumbnails.medium.url}
          alt={this.props.video.title}
        />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
