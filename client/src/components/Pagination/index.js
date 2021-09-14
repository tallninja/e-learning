import React, { Component } from "react";
import { Pagination } from "semantic-ui-react";

class Paginator extends Component {
  render() {
    return (
      <Pagination
        activePage={this.props.activePage}
        totalPages={this.props.totalPages}
        onPageChange={this.props.handlePageChange}
      />
    );
  }
}

export default Paginator;
