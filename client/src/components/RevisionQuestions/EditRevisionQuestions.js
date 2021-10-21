import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import PlaceHolder from "../PlaceHolder";

import RevisionQuestionsForm from "./RevisionQuestionsForm";
import RevisionQuestionsReview from "./RevisionQuestionsReview";

class RevisionQuestionsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { showReviewForm: false };
  }

  componentDidMount = () => {
    this.props.fetchRevisionQuestions(this.props.match.params.topicID);
  };

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  renderContent = () => {
    const { subjectID, topicID, contentID } = this.props.match.params;
    if (this.props.revisionQuestions) {
      if (this.state.showReviewForm) {
        return (
          <RevisionQuestionsReview
            handleBack={() => this.setState({ showReviewForm: false })}
            action={() => {
              const data = {
                id: contentID,
                fileURL: this.props.fileURL,
              };
              this.props.editRevisionQuestions({
                data,
                subjectID,
                topicID,
              });
            }}
            fileURL={this.props.fileURL}
            icon="save icon"
            buttonText="Save Changes"
          />
        );
      } else {
        return (
          <div>
            <h2>Edit Marking Scheme</h2>
            <RevisionQuestionsForm onSubmit={this.handleSubmit} />
          </div>
        );
      }
    } else {
      return <PlaceHolder />;
    }
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = ({ revisionQuestions, fileURL }) => {
  return { revisionQuestions: revisionQuestions.item, fileURL };
};

export default connect(mapStateToProps, actions)(RevisionQuestionsEdit);
