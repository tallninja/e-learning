import React from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

// import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import SecondaryMenu from "../SecondaryMenu";

class VideoMaterials extends React.Component {
  componentDidMount() {
    this.props.fetchMaterial(this.props.match.params.id);
  }

  render() {
    const { _id, title, videoID } = this.props.materials.material;
    this.props.fetchVideos(videoID);
    switch (this.props.videos) {
      case null:
        return null;
      case false:
        return <h4>An error occured while fetching the videos</h4>;
      default:
        return (
          <React.Fragment>
            <SecondaryMenu active="videos" materialID={_id} />
            <div className="ui container">
              <h3>{title}</h3>
              <VideoDetail video={this.props.videos[0]} />
            </div>
          </React.Fragment>
        );
    }
  }
}

const mapStateToProps = ({ materials, videos }) => {
  return { materials, videos };
};

export default connect(mapStateToProps, actions)(VideoMaterials);
