import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Error404() {
  return (
    <div>
      <Navbar />
      <main className="error404">
        <h1 className="error404__statusCode">404</h1>
        <h3>Oups ! La page que vous demandez n'existe pas.</h3>
        <NavLink className="error404__LinkToHome" to="/">
          Retourner sur la page d'accueil
        </NavLink>
      </main>
    </div>
  );
}
