import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import SecondaryMenu from "../SecondaryMenu";

import PlaceHolder from "../PlaceHolder";

class RevisionQuestions extends Component {
  componentDidMount() {
    this.props.fetchMaterial(this.props.match.params.id);
  }

  render() {
    if (this.props.materials.material) {
      const { _id } = this.props.materials.material;
      return (
        <Fragment>
          <SecondaryMenu active="revision_questions" materialID={_id} />
          <div>Revision Questions</div>
        </Fragment>
      );
    } else {
      return <PlaceHolder />;
    }
  }
}

const mapStateToProps = ({ materials, videos }) => {
  return { materials, videos };
};

export default connect(mapStateToProps, actions)(RevisionQuestions);
