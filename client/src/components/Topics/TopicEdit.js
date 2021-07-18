import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import PlaceHolder from "../PlaceHolder";

import TopicForm from "./TopicForm";
import TopicReview from "./TopicReview";

class TopicEdit extends Component {
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
    if (this.props.material) {
      const { _id, title, subject } = this.props.material;
      if (this.state.showReviewForm) {
        return (
          <TopicReview
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
            <h2>Edit Topic...</h2>
            <TopicForm
              onSubmit={this.handleSubmit}
              subject={subject}
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

const mapStateToProps = ({ materials: { material }, form }) => {
  return { material, form };
};

export default connect(mapStateToProps, actions)(TopicEdit);
