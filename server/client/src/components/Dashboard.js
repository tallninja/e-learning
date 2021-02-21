import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>This is the user's dashboard</h4>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ auth, materials }) => {
  return { user: auth, userMaterials: materials.materialsList };
};

export default connect(mapStateToProps, actions)(Dashboard);
