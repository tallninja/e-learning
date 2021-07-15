import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Progress } from "semantic-ui-react";

import * as actions from "../../actions";
import DragAndDrop from "../DragAndDrop";

import fileValidator from "../../utils/fileValidator";

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileDetails: {},
      progress: 0,
      isUploading: false,
      uploadErrorMessage: null,
    };
  }

  handleUpload = (event) => {
    event.preventDefault();
    this.props.uploadFile(this.state.fileDetails, (e) => {
      this.setState({ isUploading: true });
      this.setState({
        progress: Math.floor((e.loaded / e.total) * 100),
      });

      if (e.loaded === e.total) {
        this.setState({ isUploading: false });
      }
    });
  };

  handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileType = file.type;
    const { fileSubject, fileTopic, fileCategory } = this.props;

    if (fileValidator(this, file)) {
      this.setState({
        fileDetails: { file, fileType, fileSubject, fileTopic, fileCategory },
      });
    } else {
      return;
    }
  };

  handleDrop = ({ file, message }) => {
    const fileType = file.type;
    const { fileSubject, fileTopic, fileCategory } = this.props;

    if (fileValidator(this, file)) {
      this.setState({
        fileDetails: { file, fileType, fileSubject, fileTopic, fileCategory },
      });
      this.setState({ uploadErrorMessage: null });
    } else {
      //   this.setState({ uploadErrorMessage: message });
      return;
    }
  };

  renderProgressBar = () => {
    if (this.state.isUploading) {
      return <Progress percent={this.state.progress} indicating />;
    } else {
      return null;
    }
  };

  renderErrorMessage = () => {
    if (this.state.uploadErrorMessage) {
      return (
        <div className="ui error message">
          <div className="header">Failed</div>
          <p>{this.state.uploadErrorMessage}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  render = () => {
    // console.log(this.state.uploadErrorMessage);
    return (
      <DragAndDrop handleDrop={this.handleDrop}>
        <form
          method="POST"
          encType="multipart/form-data"
          className="ui error form"
          onSubmit={this.props.onFormSubmit}
        >
          <div className="ui placeholder segment">
            <div className="ui icon header">
              <i className="pdf file outline icon"></i>
              <div className="field">
                <label>Upload file</label>
                <label className="ui teal button" htmlFor="file-input">
                  Choose a file
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  name="material"
                  onChange={this.handleFileChange}
                  id="file-input"
                  hidden={true}
                ></input>
                {this.state.fileDetails.file
                  ? this.state.fileDetails.file.name
                  : null}
              </div>

              <div>{this.renderProgressBar()}</div>

              <button
                className="ui green button"
                type="submit"
                onClick={this.handleUpload}
              >
                Upload
              </button>
            </div>
          </div>

          <div style={{ margin: "20px" }}>
            <button className="ui right floated teal button">
              Next
              <i className="angle right icon"></i>
            </button>
            <Link
              to={this.props.backLink}
              className="ui left floated red button"
            >
              <i className="reply icon"></i>
              Cancel
            </Link>
          </div>
        </form>

        {this.renderErrorMessage()}
      </DragAndDrop>
      // {this.props.renderDocument || null}
    );
  };
}

const mapStateToProps = ({ fileURL }) => {
  return { fileURL };
};

export default connect(mapStateToProps, actions)(FileUpload);
