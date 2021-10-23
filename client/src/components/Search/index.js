import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="ui segment">
        <div className="ui container">
          <h3>Search</h3>
          <div className="ui fluid icon input">
            <input
              type="text"
              placeholder="Search a very wide input..."
              onChange={(event) => this.props.action(event.target.value)}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
