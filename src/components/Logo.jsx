import React from "react";
import logoKasa from "../assets/logo-kasa.png";

export default function Logo() {
  return (
    <section className="logo">
      <img className="logo__banner" src={logoKasa} alt="logo" />
    </section>
  );
}
