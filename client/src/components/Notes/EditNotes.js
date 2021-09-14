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
    if (this.props.notes) {
      const { _id } = this.props.notes;
      if (this.state.showReviewForm) {
        return (
          <NotesReview
            handleBack={() => this.setState({ showReviewForm: false })}
            action={() => {
              const data = {};
              data.id = _id;
              data.fileURL = this.props.fileURL;
              data.materialID = this.props.match.params.id;
              this.props.editNotes(data);
            }}
            fileURL={this.props.fileURL}
            icon="save icon"
            buttonText="Save Changes"
          />
        );
      } else {
        return (
          <div>
            <h2>Edit Notes</h2>
            <NotesForm onSubmit={this.handleSubmit} />
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

const mapStateToProps = ({ notes, fileURL }) => {
  return { notes: notes.item, fileURL };
};

export default connect(mapStateToProps, actions)(NotesEdit);
