import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <section className="navbar">
      <Logo />
      <div>
        <NavLink exact to="/" activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink
          exact
          to="a-propos"
          activeClassName="nav-active"
          className="navlink__about"
        >
          À propos
        </NavLink>
      </div>
    </section>
  );
}
