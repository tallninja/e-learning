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
    this.props.fetchMarkingScheme(this.props.match.params.topicID);
  };

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  renderContent = () => {
    const { subjectID, topicID, contentID } = this.props.match.params;
    if (this.props.markingScheme.item) {
      if (this.state.showReviewForm) {
        return (
          <MarkingSchemeReview
            handleBack={() => this.setState({ showReviewForm: false })}
            action={() => {
              const data = {
                id: contentID,
                fileURL: this.props.fileURL,
              };
              this.props.editMarkingScheme({
                data,
                subjectID,
                topicID,
                contentID,
              });
            }}
            fileURL={this.props.fileURL}
            icon="save icon"
            buttonText="Save Changes"
          />
        );
      } else {
        return (
          <div>
            <h2>Edit Marking Scheme</h2>
            <MarkingSchemeForm onSubmit={this.handleSubmit} />
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

const mapStateToProps = ({ markingScheme: { item }, fileURL }) => {
  return { markingScheme: item, fileURL };
};

export default connect(mapStateToProps, actions)(MarkingSchemeEdit);
