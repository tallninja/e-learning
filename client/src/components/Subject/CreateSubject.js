import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import SubjectForm from "./SubjectForm";
import SubjectReview from "./SubjectReview";

class CreateSubject extends Component {
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
          <SubjectForm onSubmit={this.handleSubmit} />
        </div>
      );
    } else {
      return (
        <SubjectReview
          handleBack={() => this.setState({ showReviewForm: false })}
          form={this.props.form}
          action={() => {
            const subject = this.props.form.subjectForm.values;
            subject.imageURL = this.props.fileURL;
            this.props.createSubject(subject);
          }}
          icon="paper plane icon"
          buttonText="Create"
        />
      );
    }
  }
}

const mapStateToProps = ({ form, fileURL }) => {
  return { form, fileURL };
};

export default connect(mapStateToProps, actions)(CreateSubject);
