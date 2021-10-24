import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Search from "../Search";

import * as actions from "../../actions";

import TopicsList from "../Topics/TopicsList";

// import subjects from "../../constants/subjects.json";

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 1, searchTerm: "", filteredTopics: [] };
  }

  renderAuthButtons = () => {
    if (this.props.user) {
      if (this.props.user.isAdmin) {
        return (
          <Link
            to={`/subjects/${this.props.match.params.subjectID}/topics/new`}
            className="fluid ui green button"
            style={{ margin: "20px 0px 20px 0px" }}
          >
            <i className="plus icon"></i>
            New Topic
          </Link>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  searchTopics = (searchTerm) => {
    if (searchTerm !== "") {
      this.setState({ searchTerm });
      let filteredTopics = this.props.subjectTopics.filter((topic) =>
        topic.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
      this.setState({ filteredTopics });
    } else {
      this.setState({ filteredTopics: this.props.subjectTopics });
    }
  };

  render() {
    return (
      <>
        <Search action={(searchTerm) => this.searchTopics(searchTerm)} />
        <TopicsList
          user={this.props.user}
          action={() =>
            this.props.fetchAllTopics(
              this.props.match.params.subjectID,
              this.state.page
            )
          }
          subjectID={this.props.match.params.subjectID}
          topics={
            this.state.filteredTopics.length === 0
              ? this.props.subjectTopics
              : this.state.filteredTopics
          }
        />
        {this.renderAuthButtons()}
      </>
    );
  }
}

const mapStateToProps = ({ user, topics, subjects: { subjectsList } }) => {
  return {
    user,
    subjectTopics: topics.topicsList,
    subjects: subjectsList,
  };
};

export default connect(mapStateToProps, actions)(Subject);
