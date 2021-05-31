import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import VideoMaterials from "./VideoMaterials";
import SecondaryMenu from "../SecondaryMenu";

class Videos extends Component {
  componentDidMount = () => {
    this.props.fetchMaterial(this.props.match.params.id);
  };

  render() {
    if (this.props.materials.material) {
      return (
        <React.Fragment>
          <SecondaryMenu
            active="videos"
            materialID={this.props.match.params.id}
          />
          <VideoMaterials
            material={this.props.materials.material}
            videoID={this.props.materials.material.videoID}
          />
        </React.Fragment>
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
