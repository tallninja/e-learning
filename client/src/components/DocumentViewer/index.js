import React, { Component } from "react";

class DocumentViewer extends Component {
  render() {
    if (this.props.fileURL) {
      return (
        <div style={{ textAlign: "center" }}>
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
                  <iframe
                    id="pdf-js-viewer"
                    src={`${process.env.PUBLIC_URL}/pdf.js/web/viewer.html?file=${this.props.fileURL}`}
                    title="webviewer"
                    frameBorder="0"
                    width="500"
                    height="600"
                  ></iframe>

                  {/* <object
                  width="900"
                  height="900"
                  data={`https://docs.google.com/gview?embedded=true&url=${this.props.fileURL}`}
                ></object> */}
                </div>
              </div>
            </div>
          </div>
          <div className="ui green button">
            <a
              href={`${process.env.PUBLIC_URL}/pdf.js/web/viewer.html?file=${this.props.fileURL}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              View Full Screen <i class="expand icon"></i>
            </a>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DocumentViewer;
