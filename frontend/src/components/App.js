import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Subject from "./Subject";
import Landing from "./Landing.js";
import Footer from "./Footer";

import MaterialCreate from "./materials/MaterialCreate";
import MaterialContent from "./materials/MaterialContent";
import MaterialDelete from "./materials/MaterialDelete";
import MaterialEdit from "./materials/MaterialEdit";
import RevisionQuestions from "./materials/RevisionQuestions";
import MarkingSchemes from "./materials/MarkingSchemes";

import Videos from "./Videos";

import history from "../history";

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
  };

  render() {
    return (
      <Router history={history}>
        <div className="ui container">
          <Navbar auth={this.props.auth} />
          <Route exact={true} path="/" component={Landing} />
          <Route exact={true} path="/dashboard" component={Dashboard} />
          <Route
            exact={true}
            path="/materials/new"
            component={MaterialCreate}
          />
          <Route
            exact={true}
            path="/materials/:subject/all"
            component={Subject}
          />
          <Route
            exact={true}
            path="/materials/edit/:id"
            component={MaterialEdit}
          />
          <Route
            exact={true}
            path="/materials/delete/:id"
            component={MaterialDelete}
          />
          <Route
            exact={true}
            path="/materials/content/:id"
            component={MaterialContent}
          />
          <Route
            exact={true}
            path="/materials/content/:id/videos"
            component={Videos}
          />
          <Route
            exact={true}
            path="/materials/content/:id/revision_questions"
            component={RevisionQuestions}
          />
          <Route
            exact={true}
            path="/materials/content/:id/marking_schemes"
            component={MarkingSchemes}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, actions)(App);
