import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    console.log(this);
    return (
      <section className="banner">
        <img
          src={this.props.url}
          alt="bannerImage"
          className={`banner__img ${this.props.classImage}`}
        />
        <h2 className="banner__text">{this.props.title}</h2>
      </section>
    );
  }
}
