import React, { Component } from "react";
import { Link } from "react-router-dom";

class Topic extends Component {
  renderAuthButtons = () => {
    if (this.props.user) {
      if (this.props.user.isAdmin) {
        return (
          <React.Fragment>
            <div className="right floated content">
              <Link
                className="ui red button"
                to={`/subjects/${this.props.subjectID}/topics/${this.props.topicID}/delete`}
              >
                <i className="trash icon"></i>Delete
              </Link>
            </div>
            <div className="right floated content">
              <Link
                className="ui yellow button"
                to={`/subjects/${this.props.subjectID}/topics/${this.props.topicID}/edit`}
              >
                <i className="edit icon"></i>Edit
              </Link>
            </div>
          </React.Fragment>
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
      <div className="item" key={this.props.id}>
        {this.renderAuthButtons()}

        <Link
          to={`/subjects/${this.props.subjectID}/topics/${this.props.topicID}/notes`}
          className="header"
        >
          {` ${this.props.title}`}
        </Link>
      </div>
    );
  }
}

export default Topic;
