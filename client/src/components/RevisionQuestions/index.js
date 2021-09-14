import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import * as actions from "../../actions";

import SecondaryMenu from "../SecondaryMenu";
import PlaceHolder from "../PlaceHolder";
import NoContent from "../NoContent";
import DocumentViewer from "../DocumentViewer";

class RevisionQuestions extends Component {
  componentDidMount = () => {
    this.props.fetchRevisionQuestions(this.props.match.params.id);
  };

  renderAuthButtons = () => {
    if (this.props.user) {
      if (this.props.user.isAdmin) {
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
    if (this.props.user.isAdmin) {
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
            <NoContent
              text="No Revision Questions..."
              icon="pdf"
              renderCreateButton={() => this.renderCreateButton()}
            />
          </React.Fragment>
        );
      default:
        if (
          this.props.revisionQuestions.materialID === this.props.match.params.id
        ) {
          const { fileURL } = this.props.revisionQuestions;
          return (
            <React.Fragment>
              <SecondaryMenu
                active="revision_questions"
                materialID={this.props.match.params.id}
              />
              {this.renderAuthButtons()}
              <DocumentViewer fileURL={fileURL} />
            </React.Fragment>
          );
        } else {
          return null;
        }
    }
  }
}

const mapStateToProps = ({ user, revisionQuestions }) => {
  return { user, revisionQuestions: revisionQuestions.item };
};

export default withRouter(connect(mapStateToProps, actions)(RevisionQuestions));
