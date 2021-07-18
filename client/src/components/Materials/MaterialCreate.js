import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import MaterialForm from "./MaterialForm";
import MaterialReview from "./MaterialReview";

class MaterialCreate extends Component {
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
          <h2>Create Your Material</h2>
          <MaterialForm onSubmit={this.handleSubmit} />
        </div>
      );
    } else {
      return (
        <MaterialReview
          handleBack={() => this.setState({ showReviewForm: false })}
          form={this.props.form}
          action={() =>
            this.props.createMaterial(this.props.form.materialForm.values)
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

export default connect(mapStateToProps, actions)(MaterialCreate);
