import React, { Component } from "react";
import { Link } from "react-router-dom";

class SecondaryMenu extends Component {
  render() {
    return (
      <div className="ui fluid four item menu" style={{ margin: "20 0 20 0" }}>
        <Link
          className={`${
            this.props.active === "notes" ? "active" : ""
          } fluid item`}
          to={`/materials/content/${this.props.materialID}`}
        >
          <i className="book icon"></i>
          Notes
        </Link>
        <Link
          className={`${
            this.props.active === "videos" ? "active" : ""
          } fluid item`}
          to={`/materials/content/${this.props.materialID}/videos`}
        >
          <i className="video camera icon"></i>
          Videos
        </Link>
        <Link
          className={`${
            this.props.active === "revision_questions" ? "active" : ""
          } fluid item`}
          to={`/materials/content/${this.props.materialID}/revision_questions`}
        >
          <i className="archive icon"></i>
          Revision Questions
        </Link>
        <Link
          className={`${
            this.props.active === "marking_schemes" ? "active" : ""
          } fluid item`}
          to={`/materials/content/${this.props.materialID}/marking_schemes`}
        >
          <i className="info icon"></i>
          Marking Schemes
        </Link>
      </div>
    );
  }
}

export default SecondaryMenu;
