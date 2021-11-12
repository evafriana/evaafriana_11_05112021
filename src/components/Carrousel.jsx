import React, { Component } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.numberOfPictures = this.props.pictures.length - 1;
    this.arrows = this.numberOfPictures > 1;
  }

  getNextPicture = (nextPicture) => {
    return nextPicture > this.numberOfPictures ? 0 : nextPicture;
  };

  handleNextPicture = () => {
    return this.setState((oldState) => {
      const nextPicture = oldState?.currentPicture + 1 || 1;
      return {
        currentPicture: this.getNextPicture(nextPicture),
      };
    });
  };

  getPreviousPicture = (previousPicture) => {
    return previousPicture > this.numberOfPictures ? 0 : previousPicture;
  };

  handlePreviousPicture = () => {
    return this.setState((oldState) => {
      const previousPicture =
        oldState?.currentPicture - 1 || this.numberOfPictures;
      return {
        currentPicture: this.getPreviousPicture(previousPicture),
      };
    });
  };

  render() {
    return (
      <article className="carrousel">
        {this.arrows && (
          <>
            <FaChevronLeft
              className="left-arrow"
              onClick={this.handlePreviousPicture}
            >
              previous
            </FaChevronLeft>
            <FaChevronRight
              className="right-arrow"
              onClick={this.handleNextPicture}
            >
              next
            </FaChevronRight>
          </>
        )}
        <img
          src={this.props.pictures[this.state?.currentPicture || 0]}
          alt="slide-pic"
          className="carrousel__pic"
        />
      </article>
    );
  }
}
