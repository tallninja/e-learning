import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

import TopicsList from "../Topics/TopicsList";

// import subjects from "../../constants/subjects.json";

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
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

  render() {
    return (
      <React.Fragment>
        <TopicsList
          user={this.props.user}
          action={() =>
            this.props.fetchAllTopics(
              this.props.match.params.subjectID,
              this.state.page
            )
          }
          subjectID={this.props.match.params.subjectID}
          topics={this.props.subjectTopics}
        />
        {this.renderAuthButtons()}
      </React.Fragment>
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
