import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class TopicDelete extends Component {
  componentDidMount = () => {
    this.props.fetchMaterial(this.props.match.params.id);
  };

  render() {
    const actions = (
      <React.Fragment>
        <button
          className="ui red button"
          onClick={() => {
            this.props.deleteMaterial(this.props.material._id);
            history.push("/dashboard");
          }}
        >
          <i className="ui icon trash" />
          Delete
        </button>

        <button
          className="ui button"
          onClick={() =>
            history.push(`/materials/content/${this.props.material._id}`)
          }
        >
          Cancel
        </button>
      </React.Fragment>
    );

    if (this.props.material) {
      return (
        <div>
          <Modal
            title="Delete Topic"
            content="Are you sure you want to delete ?"
            item={this.props.material.title}
            actions={actions}
            onDismiss={() =>
              history.push(`/materials/content/${this.props.material._id}`)
            }
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ materials }) => {
  return { material: materials.material };
};

export default connect(mapStateToProps, actions)(TopicDelete);
