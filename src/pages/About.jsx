import React, { Component } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner url="./img/bannerAbout.png" classImage="banner__about" />
        <section className="about">
          <Collapse filter="Fiabilité" />
          <Collapse
            filter="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse filter="Service" />
          <Collapse filter="Responsabilité" />
        </section>
        <Footer />
      </div>
    );
  }
}
