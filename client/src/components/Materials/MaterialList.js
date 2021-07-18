import _ from "lodash";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

import "./Pagination.css";

class MaterialList extends Component {
  constructor(props) {
    super(props);
    this.state = { materials: {}, activePage: 1, PER_PAGE: 10 };
  }

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
    const offset = (this.state.activePage - 1) * this.state.PER_PAGE;
    switch (this.props.materials) {
      case false:
        return <h4>No Topics yet...</h4>;
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
        return _.map(
          _.slice(this.props.materials, offset, offset + this.state.PER_PAGE),
          (material) => {
            return this.renderMaterialItem(material);
          }
        );
    }
  };

  handlePageChange = (e, { activePage }) => {
    this.setState({ activePage: activePage });
  };

  render() {
    if (this.props.materials) {
      const pageCount = Math.ceil(
        this.props.materials.length / this.state.PER_PAGE
      );
      return (
        <div>
          <h3>Topics</h3>
          <div className="ui ordered large relaxed divided list">
            {this.renderMaterialsList()}
          </div>
          <Pagination
            activePage={this.state.activePage}
            handlePageChange={this.handlePageChange}
            totalPages={pageCount}
          />
        </div>
      );
    } else {
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
}

export default MaterialList;
