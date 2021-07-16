import React, { Component } from "react";

class DocumentViewer extends Component {
  render() {
    if (this.props.fileURL) {
      return (
        <div className="ui segment">
          <div className="ui embed">
            {/* <object data={this.props.fileURL} type="application/pdf">
              <p>
                Your web browser doesn't have a PDF plugin. Download the file
                instead
              </p>
              <div>
                <a href={this.props.fileURL} className="ui teal button">
                  click here to download the PDF file.
                </a>
              </div>
            </object> */}
            <div className="ui segment">
              <div className="ui embed">
                <object
                  width="900"
                  height="900"
                  data={`https://docs.google.com/gview?embedded=true&url=${this.props.fileURL}`}
                ></object>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DocumentViewer;
