import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import VideoMaterials from "./VideoMaterials";

class Videos extends Component {
  componentDidMount = () => {
    this.props.fetchMaterial(this.props.match.params.id);
  };

  render() {
    if (this.props.materials.material) {
      return (
        <VideoMaterials
          materials={this.props.materials}
          videoID={this.props.materials.material.videoID}
        />
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ materials }) => {
  return { materials };
};

export default connect(mapStateToProps, actions)(Videos);
