import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

import SecondaryMenu from "../SecondaryMenu";
import PlaceHolder from "../PlaceHolder";

class Notes extends Component {
  componentDidMount = () => {
    this.props.fetchNotes(this.props.match.params.id);
  };

  renderAuthButtons = () => {
    if (this.props.auth) {
      if (this.props.auth.isAdmin) {
        return (
          <div className="ui two top attached buttons">
            <Link
              to={`/materials/content/${this.props.match.params.id}/notes/edit`}
              className="ui teal button"
            >
              <i className="edit icon"></i>
              Edit
            </Link>
            <Link
              to={`/materials/content/${this.props.match.params.id}/notes/delete`}
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

  renderCreateButton = () => {
    if (this.props.auth.isAdmin) {
      return (
        <Link
          to={`/materials/content/${this.props.match.params.id}/notes/new`}
          className="ui green button"
        >
          <i className="plus icon"></i>
          Create
        </Link>
      );
    } else {
      return null;
    }
  };

  render() {
    switch (this.props.notes) {
      case null:
        return <PlaceHolder />;
      case false:
        return (
          <React.Fragment>
            <SecondaryMenu
              active="notes"
              materialID={this.props.match.params.id}
            />
            <div className="ui segment" style={{ textAlign: "center" }}>
              <h4>No Notes...</h4>
              {this.renderCreateButton()}
            </div>
          </React.Fragment>
        );
      default:
        if (this.props.notes.materialID === this.props.match.params.id) {
          const { content } = this.props.notes;
          return (
            <React.Fragment>
              <SecondaryMenu
                active="notes"
                materialID={this.props.match.params.id}
              />
              {this.renderAuthButtons()}
              <div className="ui attached segment">
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

const mapStateToProps = ({ auth, notes }) => {
  return { auth, notes: notes.item };
};

export default connect(mapStateToProps, actions)(Notes);
