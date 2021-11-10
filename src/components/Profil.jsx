import React, { Component } from "react";

export default class Profil extends Component {
  render() {
    return (
      <div className="profil">
        <p className="profil__name">{this.props.host.name}</p>
        <img src={this.props.host.picture} alt="profilName" />
      </div>
    );
  }
}
