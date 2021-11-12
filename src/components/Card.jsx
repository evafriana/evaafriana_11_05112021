import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    return (
      <Link
        to={`/logement/${this.props.id}`}
        className="card"
        title={this.props.description}
      >
        <img src={this.props.cover} alt="cardImage" className="card__img" />
        <p className="card__text">{this.props.location}</p>
      </Link>
    );
  }
}
