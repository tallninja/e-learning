import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class MaterialList extends Component {
  componentDidMount = () => {
    this.props.action();
  };

  renderMaterialItem = (material) => {
    return (
      <div className="item" key={material._id}>
        {/* <i className="large book middle aligned icon"></i> */}
        <div className="content">
          <Link to={`/materials/content/${material._id}`} className="header">
            {material.title}
          </Link>
          <div className="description">
            <div>Description</div>
          </div>
        </div>
      </div>
    );
  };

  renderMaterialsList = () => {
    switch (this.props.materials) {
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
        return _.map(this.props.materials, (material) => {
          return this.renderMaterialItem(material);
        });
    }
  };

  render() {
    return (
      <div>
        <h3>Topics</h3>
        <div className="ui ordered large relaxed divided list">
          {this.renderMaterialsList()}
        </div>
      </div>
    );
  }
}

export default MaterialList;
