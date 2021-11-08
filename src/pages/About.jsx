import React, { Component } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner url="./img/bannerAbout.png" classImage="banner__about" />
        <Footer />
      </div>
    );
  }
}
