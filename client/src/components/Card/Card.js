import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Card.css";

class Card extends Component {
  renderAuthButtons = () => {
    if (this.props.user.isAdmin) {
      return (
        <div className="extra content">
          <div className="ui two buttons">
            <Link
              to={`/subjects/${this.props.id}/edit`}
              className="ui basic yellow button"
            >
              Edit
            </Link>
            <Link
              to={`/subjects/${this.props.id}/delete`}
              className="ui basic red button"
            >
              Delete
            </Link>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className={`ui ${this.props.color} card`}>
        <div className="image">
          <img src={this.props.image} alt={this.props.subject} />
        </div>
        <div className="content">
          <Link to={`/materials/${this.props.subject}/all`} className="header">
            {this.props.subject}
          </Link>
          <div className="description">{this.props.description}</div>
        </div>
        {this.renderAuthButtons()}
      </div>
    );
  }
}

export default Card;
