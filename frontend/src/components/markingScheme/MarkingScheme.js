import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

import SecondaryMenu from "../SecondaryMenu";
import PlaceHolder from "../PlaceHolder";

class MarkingSchemeContent extends Component {
  componentDidMount = () => {
    this.props.fetchMarkingScheme(this.props.match.params.id);
  };

  renderAuthButtons = () => {
    if (this.props.auth) {
      if (this.props.auth.isAdmin) {
        return (
          <div className="ui two top attached buttons">
            <Link
              to={`/materials/content/${this.props.match.params.id}/marking_scheme/edit`}
              className="ui teal button"
            >
              <i className="edit icon"></i>
              Edit
            </Link>
            <Link
              to={`/materials/content/${this.props.match.params.id}/marking_scheme/delete`}
              className="ui orange button"
            >
              <i className="trash icon"></i>
              Delete
            </Link>
          </div>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  renderCreateButton = () => {
    if (this.props.auth.isAdmin) {
      return (
        <Link
          to={`/materials/content/${this.props.match.params.id}/marking_scheme/new`}
          className="ui green button"
        >
          <i className="plus icon"></i>
          Create
        </Link>
      );
    } else {
      return null;
    }
  };

  render() {
    switch (this.props.markingScheme) {
      case null:
        return <PlaceHolder />;
      case false:
        return (
          <React.Fragment>
            <SecondaryMenu
              active="marking_scheme"
              materialID={this.props.match.params.id}
            />
            <div className="ui segment" style={{ textAlign: "center" }}>
              <h4>No Marking scheme...</h4>
              {this.renderCreateButton()}
            </div>
          </React.Fragment>
        );
      default:
        if (
          this.props.markingScheme.materialID === this.props.match.params.id
        ) {
          const { content } = this.props.markingScheme;
          return (
            <React.Fragment>
              <SecondaryMenu
                active="marking_scheme"
                materialID={this.props.match.params.id}
              />
              {this.renderAuthButtons()}
              <div className="ui attached segment">
                <div
                  className="ui left aligned piled segment"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
              </div>
            </React.Fragment>
          );
        } else {
          return null;
        }
    }
  }
}

const mapStateToProps = ({ auth, markingScheme }) => {
  return { auth, markingScheme: markingScheme.item };
};

export default connect(mapStateToProps, actions)(MarkingSchemeContent);
