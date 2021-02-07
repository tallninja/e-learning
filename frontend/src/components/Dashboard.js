import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

import * as actions from "../actions";

import MaterialList from "./materials/MaterialList";

class Dashboard extends Component {
  render() {
    return (
      <MaterialList
        action={this.props.fetchMaterials}
        userMaterials={this.props.userMaterials}
      />
    );
  }
}

const mapStateToProps = ({ auth, materials }) => {
  return { user: auth, userMaterials: materials.materialsList };
};

export default connect(mapStateToProps, actions)(Dashboard);
