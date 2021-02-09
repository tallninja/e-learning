import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import PlaceHolder from "../PlaceHolder";

import MarkingSchemeForm from "./MarkingSchemeForm";
import MarkingSchemeReview from "./MarkingSchemeReview";

class MarkingSchemeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { showReviewForm: false };
  }

  componentDidMount = () => {
    this.props.fetchMarkingScheme(this.props.match.params.id);
  };

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  renderContent = () => {
    if (this.props.markingScheme.item) {
      const { _id, content } = this.props.markingScheme.item;
      if (this.state.showReviewForm) {
        return (
          <MarkingSchemeReview
            handleBack={() => this.setState({ showReviewForm: false })}
            form={this.props.form}
            action={() =>
              this.props.editMarkingScheme(
                _id,
                this.props.form.markingSchemeForm.values
              )
            }
            icon="save icon"
            buttonText="Save Changes"
          />
        );
      } else {
        return (
          <div>
            <h2>Edit Marking Scheme</h2>
            <MarkingSchemeForm
              onSubmit={this.handleSubmit}
              initialValues={{ content }}
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

const mapStateToProps = ({ markingScheme, form }) => {
  return { markingScheme, form };
};

export default connect(mapStateToProps, actions)(MarkingSchemeEdit);
