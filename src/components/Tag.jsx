import React, { Component } from "react";

export default class Tag extends Component {
  render() {
    return (
      <div className="tag">
        <p className="tag__apt">{this.props.tags}</p>
      </div>
    );
  }
}
