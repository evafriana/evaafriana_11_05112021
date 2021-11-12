import React, { Component } from "react";
// import Data from "../data/data.json";

export default class Carrousel extends Component {
  constructor(props) {
    super(props);
    this.numberOfPictures = this.props.pictures.length - 1;
  }
  //   state = {
  //     pictures: [],
  //     current: 0,
  //   };

  //   showContent = () => {
  //     this.setState({
  //       show: !this.state.show,
  //     });
  //     this.state.show
  //       ? this.setState({ className: "isClose" })
  //       : this.setState({ className: "isOpen" });
  //   };

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
      <div>
        <button onClick={this.handlePreviousPicture}>previous</button>
        <button onClick={this.handleNextPicture}>next</button>
        <img
          src={this.props.pictures[this.state?.currentPicture || 0]}
          alt="slide-pic"
          className="carrousel__pic"
        />
      </div>
    );
  }
}
