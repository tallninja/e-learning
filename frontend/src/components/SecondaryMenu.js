import React, { Component } from "react";
import { Link } from "react-router-dom";

class SecondaryMenu extends Component {
  render() {
    return (
      <div className="ui fluid three item menu" style={{ margin: "20 0 20 0" }}>
        <Link
          className="active fluid item"
          to={`/materials/content/${this.props.materialID}/notes`}
        >
          <i className="book icon"></i>
          Notes
        </Link>
        <Link
          className="fluid item"
          to={`/materials/content/${this.props.materialID}/videos`}
        >
          <i className="video camera icon"></i>
          Videos
        </Link>
        <Link
          className="fluid item"
          to={`/materials/content/${this.props.materialID}/revision_questions`}
        >
          <i className="archive icon"></i>
          Revision Questions
        </Link>
      </div>
    );
  }
}

export default SecondaryMenu;
