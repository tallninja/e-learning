import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import * as actions from "../../actions";

import SecondaryMenu from "../SecondaryMenu";
import PlaceHolder from "../PlaceHolder";
import NoContent from "../NoContent";
import DocumentViewer from "../DocumentViewer";

class Notes extends Component {
  componentDidMount = () => {
    this.props.fetchNotes(this.props.match.params.topicID);
  };

  renderAuthButtons = () => {
    const { subjectID, topicID } = this.props.match.params;
    const contentID = this.props.notes._id;
    if (this.props.user) {
      if (this.props.user.isAdmin) {
        return (
          <div className="ui two top attached buttons">
            <Link
              to={`/subjects/${subjectID}/topics/${topicID}/notes/${contentID}/edit`}
              className="ui teal button"
            >
              <i className="edit icon"></i>
              Edit
            </Link>
            <Link
              to={`/subjects/${subjectID}/topics/${topicID}/notes/${contentID}/delete`}
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
          to={`/subjects/${subjectID}/topics/${topicID}/notes/new`}
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
    switch (this.props.notes) {
      case null:
        return <PlaceHolder />;
      case false:
        return (
          <React.Fragment>
            <SecondaryMenu
              active="notes"
              subjectID={subjectID}
              topicID={topicID}
              contentID={this.props.notes._id}
            />
            <NoContent
              text="No Notes..."
              icon="pdf"
              renderCreateButton={() => this.renderCreateButton()}
            />
          </React.Fragment>
        );
      default:
        if (this.props.notes.topic === topicID) {
          const { fileURL } = this.props.notes;
          const contentID = this.props.notes._id;
          return (
            <React.Fragment>
              <SecondaryMenu
                active="notes"
                subjectID={subjectID}
                topicID={topicID}
                contentID={contentID}
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

const mapStateToProps = ({ user, notes }) => {
  return { user, notes: notes.item };
};

export default withRouter(connect(mapStateToProps, actions)(Notes));
