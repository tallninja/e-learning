import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

import MaterialList from "./materials/MaterialList";

class Subject extends Component {
  constructor(props) {
    super(props);
    this.state = { page: 1 };
  }

  render() {
    return (
      <MaterialList
        action={() =>
          this.props.fetchAllMaterials(
            this.props.match.params.subject,
            this.state.page
          )
        }
        userMaterials={this.props.subjectMaterials}
      />
    );
  }
}

const mapStateToProps = ({ auth, materials }) => {
  return { user: auth, subjectMaterials: materials.materialsList };
};

export default connect(mapStateToProps, actions)(Subject);
