import _ from "lodash";
import React, { Component } from "react";
import Pagination from "../../Pagination";

import PlaceHolder from "../../PlaceHolder";
import Topic from "./Topic";

class TopicsList extends Component {
  constructor(props) {
    super(props);
    this.state = { materials: {}, activePage: 1, PER_PAGE: 10 };
  }

  componentDidMount = () => {
    this.props.action();
  };

  renderTopicsList = () => {
    const offset = (this.state.activePage - 1) * this.state.PER_PAGE;
    switch (this.props.materials) {
      case false:
        return <h4>No Topics yet...</h4>;
      case null:
        return <PlaceHolder />;
      default:
        return _.map(
          _.slice(this.props.materials, offset, offset + this.state.PER_PAGE),
          (material) => {
            return (
              <Topic
                key={material._id}
                user={this.props.user}
                id={material._id}
                title={material.title}
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
    if (this.props.materials) {
      const pageCount = Math.ceil(
        this.props.materials.length / this.state.PER_PAGE
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
