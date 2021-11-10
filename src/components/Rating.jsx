import React, { Component } from "react";
import { IoIosStar } from "react-icons/io";

export default class Rating extends Component {
  constructor(props) {
    super(props);
    this.rating = parseInt(this.props.rating);
  }

  getStars() {
    const result = [];

    for (let index = 0; index < 5; index++) {
      if (index < this.rating) {
        result.push(<IoIosStar fontSize={24} />);
      } else {
        result.push(<IoIosStar color="lightgrey" fontSize={24} />);
      }
    }
    return result;
  }

  render() {
    return <div className="rating">{this.getStars()}</div>;
  }
}
