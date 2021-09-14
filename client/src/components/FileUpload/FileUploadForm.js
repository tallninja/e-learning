import React, { Component } from "react";

class FileUploadForm extends Component {
  render() {
    return (
      <>
        <form className="ui error form">
          <div className="ui placeholder segment">
            <div className="ui icon header">
              <i className="pdf file outline icon"></i>
              <div className="field">
                <h3>Upload file</h3>

                <div
                  className="ui bulleted list"
                  style={{ textAlign: "left", fontSize: "70%" }}
                >
                  <small className="item">
                    The file should be in PDF format
                  </small>
                  <small className="item">
                    The file should be LESS than 10MB.
                  </small>
                </div>

                <div className="ui labeled input">
                  <label className="ui teal label button" htmlFor="file-input">
                    Select File
                  </label>
                  <input
                    type="text"
                    placeholder="file.pdf"
                    value={
                      this.props.fileDetails.file
                        ? this.props.fileDetails.file.name
                        : ""
                    }
                    readOnly
                  />
                </div>

                <small>OR</small>

                <div>Drag and Drop</div>

                <input
                  type="file"
                  accept=".pdf"
                  name="material"
                  onChange={this.props.onFileChange}
                  id="file-input"
                  hidden={true}
                ></input>
              </div>

              <div>{this.props.renderProgressBar()}</div>

              <button
                className="ui green button"
                type="submit"
                onClick={this.props.handleUpload}
              >
                Upload
              </button>
            </div>
          </div>
        </form>

        {this.props.renderErrorMessage()}
      </>
    );
  }
}

export default FileUploadForm;
