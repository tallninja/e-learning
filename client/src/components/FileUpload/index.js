import React, { Component } from "react";
import { connect } from "react-redux";
import { Progress } from "semantic-ui-react";

import * as actions from "../../actions";
import DragAndDrop from "../DragAndDrop";
import FileUploadForm from "./FileUploadForm";

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
        <FileUploadForm
          fileDetails={this.state.fileDetails}
          onFileChange={this.handleFileChange}
          renderErrorMessage={this.renderErrorMessage}
          onFormSubmit={this.props.onFormSubmit}
          handleUpload={this.handleUpload}
          renderProgressBar={this.renderProgressBar}
          backLink={this.props.backLink}
        />
      </DragAndDrop>
      // {this.props.renderDocument || null}
    );
  };
}

const mapStateToProps = ({ fileURL }) => {
  return { fileURL };
};

export default connect(mapStateToProps, actions)(FileUpload);
