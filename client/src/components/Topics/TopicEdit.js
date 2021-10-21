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
    this.props.fetchTopic(this.props.match.params.topicID);
  };

  handleSubmit = () => {
    this.setState({ showReviewForm: true });
  };

  renderContent = () => {
    if (this.props.topic) {
      const { _id, title, subject } = this.props.topic;
      if (this.state.showReviewForm) {
        return (
          <TopicReview
            handleBack={() => this.setState({ showReviewForm: false })}
            form={this.props.form}
            action={() =>
              this.props.editTopic(_id, this.props.form.topicForm.values)
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

const mapStateToProps = ({ topics: { topic }, form }) => {
  return { topic, form };
};

export default connect(mapStateToProps, actions)(TopicEdit);
