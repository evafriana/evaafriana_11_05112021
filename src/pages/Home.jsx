import React, { Component } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Data from "../data/data.json";

export default class Home extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <Navbar />
        <Banner
          url="./img/bannerHome.png"
          title={"Chez vous, partout et ailleurs"}
        />
        <section className="galleryApartment">
          <div className="cards">
            {Data.map((appartments) => {
              return (
                <Card
                  id={appartments.id}
                  cover={appartments.cover}
                  location={appartments.location}
                />
              );
            })}
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
