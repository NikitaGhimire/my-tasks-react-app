import React, { Component } from "react";

class Count extends Component {
  render() {
    return (
      <div>
        <h4>Number of tasks: {this.props.count}</h4>
      </div>
    );
  }
}

export default Count;
