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

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  render() {
    if (!this.state.showReviewForm) {
      return (
        <div>
          <h2>Create Revision Questions Scheme</h2>
          <RevisionQuestionsForm
            onSubmit={this.handleSubmit}
            materialID={this.props.match.params.id}
          />
        </div>
      );
    } else {
      return (
        <RevisionQuestionsReview
          handleBack={() => this.setState({ showReviewForm: false })}
          form={this.props.form}
          action={() =>
            this.props.createRevisionQuestions(
              this.props.form.revisionQuestionsForm.values
            )
          }
          icon="paper plane icon"
          buttonText="Create"
        />
      );
    }
  }
}

const mapStateToProps = ({ form }) => {
  return { form };
};

export default connect(mapStateToProps, actions)(CreateRevisionQuestions);
