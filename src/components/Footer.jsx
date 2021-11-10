import React from "react";
import logoFooter from "../assets/logo-footer.png";

export default function Footer() {
  return (
    <section className="footer">
      <img className="logo__footer" src={logoFooter} alt="logo" />
      <div>© 2020 Copyright Kasa. All right reserve</div>
    </section>
  );
}
