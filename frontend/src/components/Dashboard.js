import React, { Component } from "react";
import { reduxForm } from "redux-form";

import MaterialList from "./materials/MaterialList";

class Dashboard extends Component {
  render() {
    return <MaterialList />;
  }
}

export default reduxForm({ form: "materialForm" })(Dashboard);
