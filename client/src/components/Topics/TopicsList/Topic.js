import React, { Component } from "react";
import { Link } from "react-router-dom";

import Spinner from "../../Spinner";

class Topic extends Component {
  renderAuthButtons = () => {
    if (this.props.user) {
      if (this.props.user.isAdmin) {
        return (
          <React.Fragment>
            <div className="right floated content">
              <Link
                className="ui red button"
                to={`/materials/delete/${this.props.id}`}
              >
                <i className="trash icon"></i>Delete
              </Link>
            </div>
            <div className="right floated content">
              <Link
                className="ui yellow button"
                to={`/materials/edit/${this.props.id}`}
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
      return <Spinner />;
    }
  };

  render() {
    return (
      <div className="item" key={this.props.id}>
        {this.renderAuthButtons()}

        <Link
          to={`/materials/content/${this.props.id}/notes`}
          className="header"
        >
          {` ${this.props.title}`}
        </Link>
      </div>
    );
  }
}

export default Topic;
