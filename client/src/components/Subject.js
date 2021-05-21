import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../actions";

import MaterialList from "./materials/MaterialList";

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
            to={`/materials/${this.props.match.params.subject}/new`}
            className="fluid ui green button"
            style={{ margin: "20px 0px 20px 0px" }}
          >
            <i className="plus icon"></i>
            New material
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
        <MaterialList
          user={this.props.user}
          action={() =>
            this.props.fetchAllMaterials(
              this.props.match.params.subject,
              this.state.page
            )
          }
          materials={this.props.subjectMaterials}
        />
        {this.renderAuthButtons()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ user, materials }) => {
  return { user, subjectMaterials: materials.materialsList };
};

export default connect(mapStateToProps, actions)(Subject);
