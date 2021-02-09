import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import Modal from "../Modal";
import history from "../../history";

class MarkingSchemeDelete extends Component {
  componentDidMount = () => {
    this.props.fetchMarkingScheme(this.props.match.params.id);
  };

  render() {
    const actions = (
      <React.Fragment>
        <button
          className="ui red button"
          onClick={() => {
            this.props.deleteMarkingScheme(
              this.props.markingScheme._id,
              this.props.match.params.id
            );
            history.push(
              `/materials/content/${this.props.match.params.id}/marking_scheme`
            );
          }}
        >
          <i className="ui icon trash" />
          Delete
        </button>

        <button
          className="ui button"
          onClick={() =>
            history.push(
              `/materials/content/${this.props.match.params.id}/marking_scheme`
            )
          }
        >
          Cancel
        </button>
      </React.Fragment>
    );

    if (this.props.markingScheme) {
      return (
        <div>
          <Modal
            title="Delete Stream"
            content="Are you sure you want to delete ?"
            item={this.props.markingScheme._id}
            actions={actions}
            onDismiss={() =>
              history.push(
                `/materials/content/${this.props.match.params.id}/marking_scheme`
              )
            }
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = ({ markingScheme }) => {
  return { markingScheme: markingScheme.item };
};

export default connect(mapStateToProps, actions)(MarkingSchemeDelete);
