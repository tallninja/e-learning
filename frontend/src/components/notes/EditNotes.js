import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import PlaceHolder from "../PlaceHolder";

import NotesForm from "./NotesForm";
import NotesReview from "./NotesReview";

class NotesEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { showReviewForm: false };
  }

  componentDidMount = () => {
    this.props.fetchNotes(this.props.match.params.id);
  };

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  renderContent = () => {
    if (this.props.notes.item) {
      const { _id, content } = this.props.notes.item;
      if (this.state.showReviewForm) {
        return (
          <NotesReview
            handleBack={() => this.setState({ showReviewForm: false })}
            form={this.props.form}
            action={() =>
              this.props.editNotes(_id, this.props.form.notesForm.values)
            }
            icon="save icon"
            buttonText="Save Changes"
          />
        );
      } else {
        return (
          <div>
            <h2>Edit Marking Scheme</h2>
            <NotesForm
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

const mapStateToProps = ({ Notes, form }) => {
  return { Notes, form };
};

export default connect(mapStateToProps, actions)(NotesEdit);
