import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../../actions";

import MarkingSchemeForm from "./MarkingSchemeForm";
import MarkingSchemeReview from "./MarkingSchemeReview";

class CreateMarkingScheme extends Component {
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
          <h2>Create Marking Scheme</h2>
          <MarkingSchemeForm
            onSubmit={this.handleSubmit}
            topic={this.props.topic}
          />
        </div>
      );
    } else {
      return (
        <MarkingSchemeReview
          handleBack={() => this.setState({ showReviewForm: false })}
          form={this.props.form}
          fileURL={this.props.fileURL}
          action={() => {
            const markingScheme = {
              subject: subjectID,
              topic: topicID,
              fileURL: this.props.fileURL,
              fileName: this.props.fileURL.split("/").slice(-1)[0],
            };
            this.props.createMarkingScheme(markingScheme);
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

export default withRouter(
  connect(mapStateToProps, actions)(CreateMarkingScheme)
);
