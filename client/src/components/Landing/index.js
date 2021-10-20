import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

import Card from "../Card/Card";
import NoContent from "../NoContent";
import PlaceHolder from "../PlaceHolder";
import subjects from "../../constants/subjects.json";

import colors from "../../constants/colors.json";

class Landing extends Component {
  componentDidMount = () => {
    this.props.fetchSubjects(1);
  };

  renderCreateButton = () => {
    if (this.props.user.isAdmin) {
      return (
        <Link to={`/subjects/new`} className="ui green button">
          <i className="plus icon"></i>
          Create
        </Link>
      );
    } else {
      return null;
    }
  };

  renderSubjects = () => {
    switch (this.props.subjects) {
      case false:
        return (
          <React.Fragment>
            <NoContent
              text="No Subjects..."
              icon="eye slash"
              renderCreateButton={() => this.renderCreateButton()}
            />
          </React.Fragment>
        );
      case null:
        return <PlaceHolder />;
      default:
        return (
          <>
            <div className="ui four stackable cards">
              {_.map(this.props.subjects, (subject) => {
                const { _id, name, description, imageURL } = subject;
                const color =
                  colors[Math.floor(Math.random() * colors.length) - 1];
                return (
                  <Card
                    key={_id}
                    id={_id}
                    image={imageURL}
                    subject={{ key: subjects[name], value: name }}
                    color={color}
                    description={description}
                    user={this.props.user}
                  />
                );
              })}
            </div>
          </>
        );
    }
  };

  render() {
    return (
      <>
        <div>{this.renderSubjects()}</div>
        <div
          style={{ marginTop: "2%", display: "flex", justifyContent: "center" }}
        >
          {this.props.subjects ? this.renderCreateButton() : null}
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ user, subjects: { subjectsList } }) => {
  return { user, subjects: subjectsList };
};

export default connect(mapStateToProps, actions)(Landing);
