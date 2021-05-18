import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Subject from "./Subject";
import Landing from "./Landing.js";
import Footer from "./footer";

import MaterialCreate from "./materials/MaterialCreate";
import MaterialContent from "./materials/MaterialContent";
import MaterialDelete from "./materials/MaterialDelete";
import MaterialEdit from "./materials/MaterialEdit";

import Notes from "./notes";
import NotesCreate from "./notes/CreateNotes";
import NotesEdit from "./notes/EditNotes";
import NotesDelete from "./notes/DeleteNotes";

import RevisionQuestions from "./revisionQuestions";
import RevisionQuestionsCreate from "./revisionQuestions/CreateRevisionQuestions";
import RevisionQuestionsEdit from "./revisionQuestions/EditRevisionQuestions";
import RevisionQuestionsDelete from "./revisionQuestions/DeleteRevisionQuestions";

import MarkingScheme from "./markingScheme";
import MarkingSchemeCreate from "./markingScheme/CreateMarkingScheme";
import MarkingSchemeEdit from "./markingScheme/EditMarkingScheme";
import MarkingSchemeDelete from "./markingScheme/DeleteMarkingScheme";

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
            path="/materials/:subject/new"
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
            path="/materials/content/:id/notes"
            component={Notes}
          />
          <Route
            exact={true}
            path="/materials/content/:id/notes/new"
            component={NotesCreate}
          />
          <Route
            exact={true}
            path="/materials/content/:id/notes/edit"
            component={NotesEdit}
          />
          <Route
            exact={true}
            path="/materials/content/:id/notes/delete"
            component={NotesDelete}
          />

          <Route
            exact={true}
            path="/materials/content/:id/revision_questions"
            component={RevisionQuestions}
          />
          <Route
            exact={true}
            path="/materials/content/:id/revision_questions/new"
            component={RevisionQuestionsCreate}
          />
          <Route
            exact={true}
            path="/materials/content/:id/revision_questions/edit"
            component={RevisionQuestionsEdit}
          />
          <Route
            exact={true}
            path="/materials/content/:id/revision_questions/delete"
            component={RevisionQuestionsDelete}
          />

          <Route
            exact={true}
            path="/materials/content/:id/marking_scheme"
            component={MarkingScheme}
          />
          <Route
            exact={true}
            path="/materials/content/:id/marking_scheme/new"
            component={MarkingSchemeCreate}
          />
          <Route
            exact={true}
            path="/materials/content/:id/marking_scheme/edit"
            component={MarkingSchemeEdit}
          />
          <Route
            exact={true}
            path="/materials/content/:id/marking_scheme/delete"
            component={MarkingSchemeDelete}
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
