import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import * as actions from "../../actions";

import SecondaryMenu from "../SecondaryMenu";
import PlaceHolder from "../PlaceHolder";
import NoContent from "../NoContent";
import DocumentViewer from "../DocumentViewer";

class MarkingSchemeContent extends Component {
  componentDidMount = () => {
    this.props.fetchMarkingScheme(this.props.match.params.topicID);
  };

  renderAuthButtons = () => {
    const { subjectID, topicID } = this.props.match.params;
    const contentID = this.props.markingScheme._id;
    if (this.props.user) {
      if (this.props.user.isAdmin) {
        return (
          <div className="ui two top attached buttons">
            <Link
              to={`/subjects/${subjectID}/topics/${topicID}/marking_scheme/${contentID}/edit`}
              className="ui teal button"
            >
              <i className="edit icon"></i>
              Edit
            </Link>
            <Link
              to={`/subjects/${subjectID}/topics/${topicID}/marking_scheme/${contentID}/delete`}
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
          to={`/subjects/${subjectID}/topics/${topicID}/marking_scheme/new`}
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
    const { subjectID, topicID, contentID } = this.props.match.params;
    switch (this.props.markingScheme) {
      case null:
        return <PlaceHolder />;
      case false:
        return (
          <React.Fragment>
            <SecondaryMenu
              active="marking_scheme"
              subjectID={subjectID}
              topicID={topicID}
              contentID={contentID}
            />
            <NoContent
              text="No Marking Guides..."
              icon="pdf"
              renderCreateButton={() => this.renderCreateButton()}
            />
          </React.Fragment>
        );
      default:
        if (this.props.markingScheme.topic === topicID) {
          const { fileURL } = this.props.markingScheme;
          return (
            <React.Fragment>
              <SecondaryMenu
                active="marking_scheme"
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

const mapStateToProps = ({ user, markingScheme: { item } }) => {
  return { user, markingScheme: item };
};

export default withRouter(
  connect(mapStateToProps, actions)(MarkingSchemeContent)
);
