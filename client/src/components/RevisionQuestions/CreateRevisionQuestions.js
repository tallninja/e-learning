import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import RevisionQuestionsForm from "./RevisionQuestionsForm";
import RevisionQuestionsReview from "./RevisionQuestionsReview";

class CreateRevisionQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = { showReviewForm: false };
  }

  componentDidMount = () => {
    this.props.fetchTopic(this.props.match.params.topicID);
  };

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  render() {
    const { subjectID, topicID } = this.props.match.params;
    if (!this.state.showReviewForm) {
      return (
        <div>
          <h2>Create Revision Questions</h2>
          <RevisionQuestionsForm
            onSubmit={this.handleSubmit}
            topic={this.props.topic}
          />
        </div>
      );
    } else {
      return (
        <RevisionQuestionsReview
          handleBack={() => this.setState({ showReviewForm: false })}
          form={this.props.form}
          fileURL={this.props.fileURL}
          action={() => {
            const revisionQuestions = {
              subject: subjectID,
              topic: topicID,
              fileURL: this.props.fileURL,
              fileName: this.props.fileURL.split("/").slice(-1)[0],
            };
            this.props.createRevisionQuestions(revisionQuestions);
          }}
          icon="paper plane icon"
          buttonText="Create"
        />
      );
    }
  }
}

const mapStateToProps = ({ form, fileURL, topics: { topic } }) => {
  return { form, fileURL, topic };
};

export default connect(mapStateToProps, actions)(CreateRevisionQuestions);
