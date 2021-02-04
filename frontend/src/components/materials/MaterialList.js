import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions";

class MaterialList extends Component {
  componentDidMount = () => {
    this.props.fetchMaterials();
  };

  renderMaterialItem = (material) => {
    return (
      <div className="item" key={material._id}>
        <img
          className="ui avatar image"
          src={material.avatarURL}
          alt="Profile"
        />
        <div className="content">
          <Link to={`/materialss/content/${material._id}`} className="header">
            {material.title}
          </Link>
          <div className="description">
            <div>
              <strong>Author:</strong> {material.author}
            </div>
            <div>
              <strong>Date: </strong>{" "}
              {new Date(material.dateCreated).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
    );
  };

  renderMaterialsList = () => {
    switch (this.props.userMaterials) {
      case false:
        return <h4>No Materials yet...</h4>;
      case null:
        return (
          <div className="ui placeholder">
            <div className="image header">
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        );
      default:
        return _.map(this.props.userMaterials, (material) => {
          return this.renderMaterialItem(material);
        });
    }
  };

  render() {
    return (
      <div>
        <h3>My Materials</h3>
        <div className="ui segment">
          <div className="ui relaxed divided list">
            {this.renderMaterialsList()}
          </div>
        </div>
        <Link to="/materials/new" className="fluid ui green button">
          <i className="plus icon"></i>
          New material
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, materials }) => {
  return { user: auth, userMaterials: materials.materialsList };
};

export default connect(mapStateToProps, actions)(MaterialList);
