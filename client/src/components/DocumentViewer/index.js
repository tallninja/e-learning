import React, { Component } from "react";

class DocumentViewer extends Component {
  render() {
    if (this.props.fileURL) {
      return (
        <div style={{ textAlign: "center" }}>
          <div className="ui segment">
            <div className="ui embed">
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
                </div>
              </div>
            </div>
          </div>
          <div className="ui green button">
            <a
              href={`${process.env.PUBLIC_URL}/pdf.js/web/viewer.html?file=${this.props.fileURL}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              View Full Screen <i className="expand icon"></i>
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
