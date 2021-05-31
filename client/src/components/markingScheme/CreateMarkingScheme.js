import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import MarkingSchemeForm from "./MarkingSchemeForm";
import MarkingSchemeReview from "./MarkingSchemeReview";

class CreateMarkingScheme extends Component {
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
          <h2>Create Marking Scheme</h2>
          <MarkingSchemeForm
            onSubmit={this.handleSubmit}
            materialID={this.props.match.params.id}
          />
        </div>
      );
    } else {
      return (
        <MarkingSchemeReview
          handleBack={() => this.setState({ showReviewForm: false })}
          form={this.props.form}
          action={() => {
            const markingScheme = this.props.form.markingSchemeForm.values;
            markingScheme.materialID = this.props.match.params.id;
            this.props.createMarkingScheme(markingScheme);
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

export default connect(mapStateToProps, actions)(CreateMarkingScheme);
