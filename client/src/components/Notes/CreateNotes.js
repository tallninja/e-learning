import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import * as actions from "../../actions";

import NotesForm from "./NotesForm";
import NotesReview from "./NotesReview";

class CreateNotes extends Component {
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

  render() {
    if (!this.state.showReviewForm) {
      return (
        <div>
          <NotesForm
            onSubmit={this.handleSubmit}
            material={this.props.material}
          />
        </div>
      );
    } else {
      return (
        <NotesReview
          handleBack={() => this.setState({ showReviewForm: false })}
          form={this.props.form}
          fileURL={this.props.fileURL}
          action={() => {
            const notes = {};
            notes.fileURL = this.props.fileURL;
            notes.materialID = this.props.match.params.id;
            notes.fileName = this.props.fileURL.split("/").slice(-1)[0];
            this.props.createNotes(notes);
          }}
          icon="paper plane icon"
          buttonText="Create"
        />
      );
    }
  }
}

const mapStateToProps = ({ form, fileURL, materials: { material } }) => {
  return { form, fileURL, material };
};

export default withRouter(connect(mapStateToProps, actions)(CreateNotes));
