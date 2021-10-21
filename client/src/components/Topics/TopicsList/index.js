import _ from "lodash";
import React, { Component } from "react";
import Pagination from "../../Pagination";

import PlaceHolder from "../../PlaceHolder";
import Topic from "./Topic";

class TopicsList extends Component {
  constructor(props) {
    super(props);
    this.state = { topics: {}, activePage: 1, PER_PAGE: 10 };
  }

  componentDidMount = () => {
    this.props.action();
  };

  renderTopicsList = () => {
    const offset = (this.state.activePage - 1) * this.state.PER_PAGE;
    switch (this.props.topics) {
      case false:
        return <h4>No Topics yet...</h4>;
      case null:
        return <PlaceHolder />;
      default:
        return _.map(
          _.slice(this.props.topics, offset, offset + this.state.PER_PAGE),
          (topic) => {
            return (
              <Topic
                key={topic._id}
                user={this.props.user}
                subjectID={this.props.subjectID}
                topicID={topic._id}
                title={topic.title}
              />
            );
          }
        );
    }
  };

  handlePageChange = (e, { activePage }) => {
    this.setState({ activePage: activePage });
  };

  render() {
    if (this.props.topics) {
      const pageCount = Math.ceil(
        this.props.topics.length / this.state.PER_PAGE
      );
      return (
        <div>
          <h3>Topics</h3>
          <div className="ui ordered large relaxed divided list">
            {this.renderTopicsList()}
          </div>
          <Pagination
            activePage={this.state.activePage}
            handlePageChange={this.handlePageChange}
            totalPages={pageCount}
          />
        </div>
      );
    } else {
      return (
        <div>
          <h3>Topics</h3>
          <div className="ui ordered large relaxed divided list">
            {this.renderTopicsList()}
          </div>
        </div>
      );
    }
  }
}

export default TopicsList;
