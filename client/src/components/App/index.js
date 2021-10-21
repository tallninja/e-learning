import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../actions";

import Navbar from "../Navbar";
import Subject from "../Subject";
import Landing from "../Landing";
import Footer from "../Footer";
import Login from "../Login";

import CreateSubject from "../Subject/CreateSubject";
import EditSubject from "../Subject/EditSubject";
import DeleteSubject from "../Subject/DeleteSubject";

import TopicCreate from "../Topics/TopicCreate";
// import TopicContent from "../Topics/TopicContent";
import TopicDelete from "../Topics/TopicDelete";
import TopicEdit from "../Topics/TopicEdit";

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

import NotFound from "../NotFound";

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
              path="/subjects/new"
              component={CreateSubject}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/edit"
              component={EditSubject}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/delete"
              component={DeleteSubject}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/new"
              component={TopicCreate}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID"
              component={Subject}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/edit"
              component={TopicEdit}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/delete"
              component={TopicDelete}
            />

            {/* <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID"
              component={TopicContent}
            /> */}

            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/notes"
              component={Notes}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/notes/new"
              component={NotesCreate}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/notes/:contentID/edit"
              component={NotesEdit}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/notes/:contentID/delete"
              component={NotesDelete}
            />

            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/revision_questions"
              component={RevisionQuestions}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/revision_questions/new"
              component={RevisionQuestionsCreate}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/revision_questions/:contentID/edit"
              component={RevisionQuestionsEdit}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/revision_questions/:contentID/delete"
              component={RevisionQuestionsDelete}
            />

            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/marking_scheme"
              component={MarkingScheme}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/marking_scheme/new"
              component={MarkingSchemeCreate}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/marking_scheme/:contentID/edit"
              component={MarkingSchemeEdit}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/marking_scheme/:contentID/delete"
              component={MarkingSchemeDelete}
            />

            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/videos"
              component={Videos}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/videos/new"
              component={CreateVideo}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/videos/:contentID/edit"
              component={EditVideo}
            />
            <ProtectedRoute
              exact={true}
              path="/subjects/:subjectID/topics/:topicID/videos/:contentID/delete"
              component={DeleteVideo}
            />
            <Route exact={true} path="*" component={NotFound} />
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
