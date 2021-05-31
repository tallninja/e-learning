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
          <h2>Create Revision Questions</h2>
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
          action={() => {
            const revisionQuestions =
              this.props.form.revisionQuestionsForm.values;
            revisionQuestions.materialID = this.props.match.params.id;
            this.props.createRevisionQuestions(revisionQuestions);
          }}
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
