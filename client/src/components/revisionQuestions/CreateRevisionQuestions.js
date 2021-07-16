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
    this.props.fetchMaterial(this.props.match.params.id);
  };

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
            material={this.props.material}
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
            const revisionQuestions = {};
            revisionQuestions.fileURL = this.props.fileURL;
            revisionQuestions.materialID = this.props.match.params.id;
            revisionQuestions.fileName = this.props.fileURL
              .split("/")
              .slice(-1)[0];
            this.props.createRevisionQuestions(revisionQuestions);
          }}
          icon="paper plane icon"
          buttonText="Create"
        />
      );
    }
  }
}

const mapStateToProps = ({ form, fileURL, materials: { material } }) => {
  return { form, fileURL, material };
};

export default connect(mapStateToProps, actions)(CreateRevisionQuestions);
