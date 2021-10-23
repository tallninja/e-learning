import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";

import TopicForm from "./TopicForm";
import TopicReview from "./TopicReview";

class TopicCreate extends Component {
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
          <h2>Create Your Topic</h2>
          <TopicForm onSubmit={this.handleSubmit} />
        </div>
      );
    } else {
      return (
        <TopicReview
          handleBack={() => this.setState({ showReviewForm: false })}
          form={this.props.form}
          action={() =>
            this.props.createTopic({
              title: this.props.form.topicForm.values.title,
              subject: this.props.match.params.subjectID,
            })
          }
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

export default connect(mapStateToProps, actions)(TopicCreate);
