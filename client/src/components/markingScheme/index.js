import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../../actions";

import SecondaryMenu from "../SecondaryMenu";
import PlaceHolder from "../PlaceHolder";
import NoContent from "../noContent";

class MarkingSchemeContent extends Component {
  componentDidMount = () => {
    this.props.fetchMarkingScheme(this.props.match.params.id);
  };

  renderAuthButtons = () => {
    if (this.props.user) {
      if (this.props.user.isAdmin) {
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
    if (this.props.user.isAdmin) {
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
            <NoContent
              text="No Marking Guides..."
              icon="pdf"
              renderCreateButton={() => this.renderCreateButton()}
            />
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
                  style={{ overflow: "auto", maxHeight: "60vh" }}
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

const mapStateToProps = ({ user, markingScheme }) => {
  return { user, markingScheme: markingScheme.item };
};

export default connect(mapStateToProps, actions)(MarkingSchemeContent);
