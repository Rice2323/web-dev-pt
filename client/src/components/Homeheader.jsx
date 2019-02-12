import React, { Component } from "react";
import coding from "../images/coding.mp4";
import "./Homeheader.css";

class Homeheader extends Component {
  render() {
    return (
      <div className="video-container">
        <div className="video">
          <video id="background-video" loop autoPlay>
            <source src={coding} type="video/mp4" />
            <source src={coding} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }
}

export default Homeheader;
