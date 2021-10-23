import _ from "lodash";
import React, { Component } from "react";

import Card from "../Card";

class SubjectsList extends Component {
  render() {
    const { user, subjects, colors, subjectsDict } = this.props;

    return (
      <div className="ui four stackable cards">
        {_.map(subjects, (subject) => {
          const { _id, name, imageURL } = subject;
          const color = colors[Math.floor(Math.random() * colors.length) - 1];
          return (
            <Card
              key={_id}
              id={_id}
              image={imageURL}
              subject={subject}
              verboseSubject={subjectsDict[name]}
              color={color}
              user={user}
            />
          );
        })}
      </div>
    );
  }
}

export default SubjectsList;
