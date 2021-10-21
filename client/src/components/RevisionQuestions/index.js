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
    this.props.fetchRevisionQuestions(this.props.match.params.topicID);
  };

  renderAuthButtons = () => {
    const { subjectID, topicID } = this.props.match.params;
    const contentID = this.props.revisionQuestions._id;
    if (this.props.user) {
      if (this.props.user.isAdmin) {
        return (
          <div className="ui two top attached buttons">
            <Link
              to={`/subjects/${subjectID}/topics/${topicID}/revision_questions/${contentID}/edit`}
              className="ui teal button"
            >
              <i className="edit icon"></i>
              Edit
            </Link>
            <Link
              to={`/subjects/${subjectID}/topics/${topicID}/revision_questions/${contentID}/delete`}
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
    const { subjectID, topicID } = this.props.match.params;
    if (this.props.user.isAdmin) {
      return (
        <Link
          to={`/subjects/${subjectID}/topics/${topicID}/revision_questions/new`}
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
    const { subjectID, topicID } = this.props.match.params;
    switch (this.props.revisionQuestions) {
      case null:
        return <PlaceHolder />;
      case false:
        return (
          <React.Fragment>
            <SecondaryMenu
              active="revision_questions"
              subjectID={subjectID}
              topicID={topicID}
              contentID={this.props.revisionQuestions._id}
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
                subjectID={subjectID}
                topicID={topicID}
                contentID={this.props.revisionQuestions._id}
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
