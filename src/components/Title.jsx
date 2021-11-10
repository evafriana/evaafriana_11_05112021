import React, { Component } from "react";

export default class Title extends Component {
  render() {
    return (
      <div className="title">
        <h1>{this.props.title}</h1>
        <p className="title__location">{this.props.location}</p>
      </div>
    );
  }
}
