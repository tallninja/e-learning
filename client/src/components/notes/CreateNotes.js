import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import NotesForm from "./NotesForm";
import NotesReview from "./NotesReview";

class CreateNotes extends Component {
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
          <NotesForm onSubmit={this.handleSubmit} />
        </div>
      );
    } else {
      return (
        <NotesReview
          handleBack={() => this.setState({ showReviewForm: false })}
          form={this.props.form}
          action={() => {
            const notes = this.props.form.notesForm.values;
            notes.materialID = this.props.match.params.id;
            this.props.createNotes(notes);
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

export default connect(mapStateToProps, actions)(CreateNotes);
