import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import PlaceHolder from "../PlaceHolder";

import MaterialForm from "./MaterialForm";
import MaterialReview from "./MaterialReview";

class MaterialEdit extends Component {
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

  renderContent = () => {
    if (this.props.materials.material) {
      const { _id, title, subject } = this.props.materials.material;
      if (this.state.showReviewForm) {
        return (
          <MaterialReview
            handleBack={() => this.setState({ showReviewForm: false })}
            form={this.props.form}
            action={() =>
              this.props.editMaterial(_id, this.props.form.materialForm.values)
            }
            icon="save icon"
            buttonText="Save Changes"
          />
        );
      } else {
        return (
          <div>
            <h2>Edit Material</h2>
            <MaterialForm
              onSubmit={this.handleSubmit}
              subject={this.props.form.materialForm.values.subject}
              initialValues={{ title, subject }}
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

const mapStateToProps = ({ materials, form }) => {
  return { materials, form };
};

export default connect(mapStateToProps, actions)(MaterialEdit);
