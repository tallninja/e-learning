import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions";

import Navbar from "../Navbar";
import Subject from "../Subject";
import Landing from "../Landing";
import Footer from "../Footer";
import Login from "../Login";

import MaterialCreate from "../Materials/MaterialCreate";
import MaterialContent from "../Materials/MaterialContent";
import MaterialDelete from "../Materials/MaterialDelete";
import MaterialEdit from "../Materials/MaterialEdit";

import Notes from "../Notes";
import NotesCreate from "../Notes/CreateNotes";
import NotesEdit from "../Notes/EditNotes";
import NotesDelete from "../Notes/DeleteNotes";

import RevisionQuestions from "../RevisionQuestions";
import RevisionQuestionsCreate from "../RevisionQuestions/CreateRevisionQuestions";
import RevisionQuestionsEdit from "../RevisionQuestions/EditRevisionQuestions";
import RevisionQuestionsDelete from "../RevisionQuestions/DeleteRevisionQuestions";

import MarkingScheme from "../MarkingScheme";
import MarkingSchemeCreate from "../MarkingScheme/CreateMarkingScheme";
import MarkingSchemeEdit from "../MarkingScheme/EditMarkingScheme";
import MarkingSchemeDelete from "../MarkingScheme/DeleteMarkingScheme";

import Videos from "../Videos";
import CreateVideo from "../Videos/CreateVideo";
import EditVideo from "../Videos/EditVideo";
import DeleteVideo from "../Videos/DeleteVideo";

import history from "../../history";

import ProtectedRoute from "../ProtectedRoute";

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser();
    this.props.checkUserAuthentication();
    // document.body.style.zoom = "110%";
  };

  render() {
    return (
      <Router history={history}>
        <div className="ui container">
          <Navbar auth={this.props.auth} />
          <Switch>
            <Route exact={true} path="/login" component={Login} />
            <ProtectedRoute exact={true} path="/" component={Landing} />
            <ProtectedRoute
              exact={true}
              path="/materials/:subject/new"
              component={MaterialCreate}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/:subject/all"
              component={Subject}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/edit/:id"
              component={MaterialEdit}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/delete/:id"
              component={MaterialDelete}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id"
              component={MaterialContent}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/videos"
              component={Videos}
            />

            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/notes"
              component={Notes}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/notes/new"
              component={NotesCreate}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/notes/edit"
              component={NotesEdit}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/notes/delete"
              component={NotesDelete}
            />

            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/revision_questions"
              component={RevisionQuestions}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/revision_questions/new"
              component={RevisionQuestionsCreate}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/revision_questions/edit"
              component={RevisionQuestionsEdit}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/revision_questions/delete"
              component={RevisionQuestionsDelete}
            />

            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/marking_scheme"
              component={MarkingScheme}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/marking_scheme/new"
              component={MarkingSchemeCreate}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/marking_scheme/edit"
              component={MarkingSchemeEdit}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/marking_scheme/delete"
              component={MarkingSchemeDelete}
            />

            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/videos"
              component={Videos}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/videos/new"
              component={CreateVideo}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/videos/edit"
              component={EditVideo}
            />
            <ProtectedRoute
              exact={true}
              path="/materials/content/:id/videos/delete"
              component={DeleteVideo}
            />
          </Switch>
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
