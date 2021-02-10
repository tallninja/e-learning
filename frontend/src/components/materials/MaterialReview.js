import React, { Component } from "react";

class MaterialReview extends Component {
  handleBack = () => {
    this.props.handleBack();
  };

  handleReviewSubmit = () => {
    this.props.action();
  };

  render() {
    const { title, subject, videoID } = this.props.form.materialForm.values;
    return (
      <React.Fragment>
        <h3>Review...</h3>
        <div className="ui segment">
          <h4>Title</h4>
          <div className="ui segment">{title}</div>
          <h4>Subject</h4>
          <div className="ui segment">{subject}</div>
          <h4>Video ID</h4>
          <div className="ui segment">{videoID}</div>
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

export default MaterialReview;
