import React, { Component } from "react";
import { FaChevronDown } from "react-icons/fa";
// import { FaChevronUp } from "react-icons/fa";

export default class Collapse extends Component {
  state = {
    show: false,
    className: "isClose",
  };

  showContent = () => {
    this.setState({
      show: !this.state.show,
    });
    this.state.show
      ? this.setState({ className: "isClose" })
      : this.setState({ className: "isOpen" });
  };

  render() {
    return (
      <div className="collapse">
        <div className="collapse__btn" onClick={this.showContent}>
          <span>{this.props.filter}</span>
          <FaChevronDown />
        </div>
        <div className={`collapse__content ${this.state.className}`}>
          {this.props.content}
        </div>
      </div>
    );
  }
}
