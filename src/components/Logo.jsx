import React, { Component } from "react";
import { Link } from "react-router-dom";
import logoKasa from "../assets/logo-kasa.png";

export default class Logo extends Component {
  render() {
    return (
      <Link to="/" className="logo">
        <img className="logo__banner" src={logoKasa} alt="logo" />
      </Link>
    );
  }
}
