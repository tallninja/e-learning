import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import PlaceHolder from "../PlaceHolder";

import SubjectForm from "./SubjectForm";
import SubjectReview from "./SubjectReview";

class EditSubject extends Component {
  constructor(props) {
    super(props);
    this.state = { showReviewForm: false };
  }

  componentDidMount = () => {
    this.props.fetchSubject(this.props.match.params.subjectID);
  };

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  renderContent = () => {
    if (this.props.subject) {
      const { _id, name, description } = this.props.subject;
      if (this.state.showReviewForm) {
        return (
          <SubjectReview
            handleBack={() => this.setState({ showReviewForm: false })}
            form={this.props.form}
            action={() => {
              const data = this.props.form.subjectForm.values;
              data.id = _id;
              data.imageURL = this.props.fileURL;
              this.props.editSubject(data);
            }}
            icon="save icon"
            buttonText="Save Changes"
          />
        );
      } else {
        return (
          <div>
            <h2>Edit Subject...</h2>
            <SubjectForm
              onSubmit={this.handleSubmit}
              initialValues={{ name, description }}
            />
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

const mapStateToProps = ({ subjects: { subject }, form }) => {
  return { subject, form };
};

export default connect(mapStateToProps, actions)(EditSubject);
