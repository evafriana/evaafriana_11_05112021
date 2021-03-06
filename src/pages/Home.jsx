import React, { Component } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Data from "../data/data.json";

export default class Home extends Component {
  render() {
    document.title = "Kasa - Home";
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
                  key={appartments.id}
                  id={appartments.id}
                  description={appartments.description}
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
