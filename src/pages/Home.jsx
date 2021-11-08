import React, { Component } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner
          url="./img/bannerHome.png"
          title={"Chez vous, partout et ailleurs"}
        />
        <Footer />
      </div>
    );
  }
}
