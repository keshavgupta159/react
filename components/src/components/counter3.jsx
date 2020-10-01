import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>No Record Found</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()}
      </React.Fragment>
    );
  }
}

export default Counter;
