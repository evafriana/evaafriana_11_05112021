import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.cover} alt="cardImage" className="card__img" />
        <p className="card__text">{this.props.location}</p>
      </div>
    );
  }
}
