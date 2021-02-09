import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

import SecondaryMenu from "../SecondaryMenu";
import PlaceHolder from "../PlaceHolder";

class RevisionQuestions extends Component {
  componentDidMount = () => {
    this.props.fetchRevisionQuestions(this.props.match.params.id);
  };

  renderAuthButtons = () => {
    if (this.props.auth) {
      if (this.props.auth.isAdmin) {
        return (
          <div className="ui two top attached buttons">
            <Link
              to={`/materials/content/${this.props.match.params.id}/revision_questions/edit`}
              className="ui teal button"
            >
              <i className="edit icon"></i>
              Edit
            </Link>
            <Link
              to={`/materials/content/${this.props.match.params.id}/revision_questions/delete`}
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
          to={`/materials/content/${this.props.match.params.id}/revision_questions/new`}
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
    switch (this.props.revisionQuestions) {
      case null:
        return <PlaceHolder />;
      case false:
        return (
          <React.Fragment>
            <SecondaryMenu
              active="revision_questions"
              materialID={this.props.match.params.id}
            />
            <div className="ui segment" style={{ textAlign: "center" }}>
              <h4>No Revision Questions...</h4>
              {this.renderCreateButton()}
            </div>
          </React.Fragment>
        );
      default:
        if (
          this.props.revisionQuestions.materialID === this.props.match.params.id
        ) {
          const { content } = this.props.revisionQuestions;
          return (
            <React.Fragment>
              <SecondaryMenu
                active="revision_questions"
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

const mapStateToProps = ({ auth, revisionQuestions }) => {
  return { auth, revisionQuestions: revisionQuestions.item };
};

export default connect(mapStateToProps, actions)(RevisionQuestions);
