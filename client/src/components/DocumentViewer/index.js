import React, { Component } from "react";

class DocumentViewer extends Component {
  render() {
    if (this.props.fileURL) {
      return (
        <div className="ui segment">
          <div className="ui embed">
            <embed src={this.props.fileURL} type="application/pdf" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default DocumentViewer;
