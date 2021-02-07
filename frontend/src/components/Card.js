import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <div className={`ui ${this.props.color} card`}>
        <div className="image">
          <img
            src={`${process.env.PUBLIC_URL}/images/${this.props.image}`}
            alt={this.props.subject}
          />
        </div>
        <div className="content">
          <Link to={`/materials/${this.props.subject}`} className="header">
            {this.props.subject}
          </Link>
          <div className="meta">
            <span className="date">Created in 2021</span>
          </div>
          <div className="description">{this.props.description}</div>
        </div>
        <div className="extra content">
          <i className="book icon"></i>
          22 Topics
        </div>
      </div>
    );
  }
}

export default Card;
