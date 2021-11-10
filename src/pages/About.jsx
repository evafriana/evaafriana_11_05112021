import React, { Component } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DataAbout from "../data/about.json";

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner url="./img/bannerAbout.png" classImage="banner__about" />
        <section className="about">
          {DataAbout.map((about) => {
            return <Collapse filter={about.filter} content={about.content} />;
          })}
        </section>
        <Footer />
      </div>
    );
  }
}
