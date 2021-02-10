import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import PlaceHolder from "../PlaceHolder";

import RevisionQuestionsForm from "./RevisionQuestionsForm";
import RevisionQuestionsReview from "./RevisionQuestionsReview";

class RevisionQuestionsEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { showReviewForm: false };
  }

  componentDidMount = () => {
    this.props.fetchRevisionQuestions(this.props.match.params.id);
  };

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  renderContent = () => {
    if (this.props.revisionQuestions.item) {
      const { _id, materialID, content } = this.props.revisionQuestions.item;
      if (this.state.showReviewForm) {
        return (
          <RevisionQuestionsReview
            handleBack={() => this.setState({ showReviewForm: false })}
            form={this.props.form}
            action={() =>
              this.props.editRevisionQuestions(
                _id,
                this.props.form.revisionQuestionsForm.values
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
            <RevisionQuestionsForm
              onSubmit={this.handleSubmit}
              initialValues={{ materialID, content }}
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

const mapStateToProps = ({ revisionQuestions, form }) => {
  return { revisionQuestions, form };
};

export default connect(mapStateToProps, actions)(RevisionQuestionsEdit);
