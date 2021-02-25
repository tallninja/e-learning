import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class MaterialList extends Component {
  componentDidMount = () => {
    this.props.action();
  };

  renderAuthButtons = (material) => {
    if (this.props.user.isAdmin) {
      return (
        <React.Fragment>
          <div className="right floated content">
            <Link
              className="ui red button"
              to={`/materials/delete/${material._id}`}
            >
              <i className="trash icon"></i>Delete
            </Link>
          </div>
          <div className="right floated content">
            <Link
              className="ui yellow button"
              to={`/materials/edit/${material._id}`}
            >
              <i className="edit icon"></i>Edit
            </Link>
          </div>
        </React.Fragment>
      );
    } else {
      return null;
    }
  };

  renderMaterialItem = (material) => {
    return (
      <div className="item" key={material._id}>
        {this.renderAuthButtons(material)}
        <div className="content">
          <Link
            to={`/materials/content/${material._id}/notes`}
            className="header"
          >
            {` ${material.title}`}
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
