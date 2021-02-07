import _ from "lodash";
import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
  if (props.videos) {
    const video_list = _.map(props.videos, (video) => {
      return (
        <VideoItem
          key={video.id.videoId}
          video={video}
          onVideoClick={props.onClickedVideo}
        />
      );
    });

    return <div className="ui relaxed divided list">{video_list}</div>;
  } else {
    return null;
  }
};

export default VideoList;
