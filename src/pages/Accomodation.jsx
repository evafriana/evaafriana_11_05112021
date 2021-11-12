import React, { Component } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Tag from "../components/Tag";
import Title from "../components/Title";
import Collapse from "../components/Collapse";
import Rating from "../components/Rating";
import Data from "../data/data.json";

import Error404 from "./Error404";
import Profil from "../components/Profil";
import Carrousel from "../components/Carrousel";

export default class Accomodation extends Component {
  render() {
    document.title = "Kasa - Logement";

    const accomodation = Data.find((item) => {
      return item.id === this.props?.match?.params?.id;
    });

    if (!accomodation) return <Error404 />;

    const {
      title,
      location,
      tags,
      description,
      equipments,
      rating,
      host,
      pictures,
    } = accomodation;

    return (
      <div>
        <Navbar />
        <section className="accomodation">
          <Carrousel pictures={pictures} />
          <div className="accomodation__header">
            <div>
              <Title title={title} location={location} />
              <div className="tags">
                {tags.map((tag, index) => {
                  return <Tag key={index} tags={tag} />;
                })}
              </div>
            </div>
            <div className="accomodation__profil">
              <Profil host={host} />
              <Rating rating={rating} />
            </div>
          </div>
          <div className="accomodation__collapse">
            <Collapse filter="Description" content={description} />
            <Collapse
              filter="Équipments"
              content={equipments.map((item, index) => (
                <p key={index}> {item}</p>
              ))}
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
