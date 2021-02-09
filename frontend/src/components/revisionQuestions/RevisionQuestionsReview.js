import React, { Component } from "react";

class RevisionQuestionsReview extends Component {
  handleBack = () => {
    this.props.handleBack();
  };

  handleReviewSubmit = () => {
    this.props.action();
  };

  render() {
    const { content } = this.props.form.revisionQuestionsForm.values;
    return (
      <React.Fragment>
        <h3>Review...</h3>
        <div className="ui segment">
          <h4>Content</h4>
          <div
            className="ui segment"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
        <div style={{ margin: "20px" }}>
          <button
            className="ui right floated green button"
            onClick={this.handleReviewSubmit}
          >
            <i className={this.props.icon}></i>
            {this.props.buttonText}
          </button>
          <button
            className="ui left floated teal button"
            onClick={this.handleBack}
          >
            <i className="angle left icon"></i>
            Back
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default RevisionQuestionsReview;
