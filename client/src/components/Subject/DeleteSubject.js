import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class DeleteSubject extends Component {
  componentDidMount = () => {
    this.props.fetchSubject(this.props.match.params.subjectID);
  };

  render() {
    const actions = (
      <React.Fragment>
        <button
          className="ui red button"
          onClick={() => {
            this.props.deleteSubject(this.props.subject._id);
            history.push("/");
          }}
        >
          <i className="ui icon trash" />
          Delete
        </button>

        <button className="ui button" onClick={() => history.push("/")}>
          Cancel
        </button>
      </React.Fragment>
    );

    if (this.props.subject) {
      return (
        <div>
          <Modal
            title="Delete Subject"
            content="Are you sure you want to delete ?"
            item={this.props.subject.name}
            actions={actions}
            onDismiss={() => history.push("/")}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ subjects: { subject } }) => {
  return { subject: subject };
};

export default connect(mapStateToProps, actions)(DeleteSubject);
