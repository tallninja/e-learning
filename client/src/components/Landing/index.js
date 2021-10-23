import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

import subjectsDict from "../../constants/subjects.json";
import Search from "../Search";

import colors from "../../constants/colors.json";
import SubjectsList from "../SubjectsList";

class Landing extends Component {
  state = { searchTerm: "", filteredSubjects: [] };

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

  searchSubjects = (searchTerm) => {
    if (searchTerm !== "") {
      this.setState({ searchTerm });
      let filteredSubjects = this.props.subjects.filter((subject) =>
        subjectsDict[subject.name]
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
      );
      this.setState({ filteredSubjects });
    } else {
      this.setState({ filteredSubjects: this.props.subjects });
    }
  };

  render() {
    return (
      <>
        <Search action={(searchTerm) => this.searchSubjects(searchTerm)} />
        <div>
          <SubjectsList
            subjects={
              this.state.filteredSubjects == false
                ? this.props.subjects
                : this.state.filteredSubjects
            }
            colors={colors}
            user={this.props.user}
            subjectsDict={subjectsDict}
            renderCreateButton={this.renderCreateButton}
          />
        </div>
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
