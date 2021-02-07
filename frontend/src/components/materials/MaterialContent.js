import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

import SecondaryMenu from "../SecondaryMenu";

class MaterialContent extends Component {
  componentDidMount = () => {
    this.props.fetchMaterial(this.props.match.params.id);
  };

  renderAuthButtons = () => {
    if (this.props.auth) {
      if (this.props.auth.isAdmin) {
        return (
          <div className="ui two top attached buttons">
            <Link
              to={`/materials/edit/${this.props.material._id}`}
              className="ui teal button"
            >
              <i className="edit icon"></i>
              Edit
            </Link>
            <Link
              to={`/materials/delete/${this.props.material._id}`}
              className="ui orange button"
            >
              <i className="trash icon"></i>
              Delete
            </Link>
          </div>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  render() {
    switch (this.props.material) {
      case null:
        return (
          <div className="ui placeholder">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        );
      case false:
        return <div>Material not found...</div>;
      default:
        if (this.props.material._id === this.props.match.params.id) {
          const { _id, title, content } = this.props.material;
          return (
            <React.Fragment>
              <SecondaryMenu active="notes" materialID={_id} />
              {this.renderAuthButtons()}
              <div className="ui attached segment">
                <h2>{title}</h2>
                <div
                  className="ui left aligned piled segment"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </div>
            </React.Fragment>
          );
        } else {
          return null;
        }
    }
  }
}

const mapStateToProps = ({ auth, materials }) => {
  return { auth, material: materials.material };
};

export default connect(mapStateToProps, actions)(MaterialContent);
