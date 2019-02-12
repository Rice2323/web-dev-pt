import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron.jsx";
import Footer from "../components/Footer.jsx";
import CSSyoutube from "../components/CSSyoutube.jsx";
import CSSyoutubeMID from "../components/CSSyoutubeMID.jsx";
import CSSyoutubeHRD from "../components/CSSyoutubeHRD.jsx";
import "./Html.css";

class Css extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          title="CSS"
          subtitle="In this group of tutorials we will become familiar with CSS. Stylin' and Profilin' that page WOooo!"
        />
        <div className="row d-flex justify-content-around m-4">
          <div className="card col-9" id="tutorialCard">
            <h2 className="card-header">Beginner</h2>
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="m-2">
                  {" "}
                  In this crash course we will cram as much about HTML that we
                  can. If you are interested in learning HTML but know nothing,
                  then you are in the right place. We will be creating a cheat
                  sheet with all of the common HTML5 tags, attributes, semantic
                  markup, etc.
                </h2>
                <br />
                <p className="m-2">
                  {" "}
                  Note that we are not the creators of this video series and
                  only used them as a guide through our Web Developer journey.*
                </p>
                <br />
                <a
                  className="btn btn-warning m-4"
                  href="https://www.youtube.com/user/TechGuyWeb"
                >
                  <h2>Click Here To Follow The Channel</h2>
                </a>
              </div>
              <div className="m-2">
                <CSSyoutubeMID />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-around m-4">
          <div className="card col-9" id="tutorialCard">
            <h2 className="card-header">Intermediate</h2>
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="m-2">
                  {" "}
                  In this video We'll go through everything you need to know
                  before taking this course and give you a brief overview of
                  what we'll be covering over the next 30 - 40 videos, such as
                  CSS selectors, CSS classes, CSS ID's and much more.{" "}
                </h2>
                <br />
                <p className="m-2">
                  {" "}
                  Note that we are not the creators of this video series and
                  only used them as a guide through our Web Developer journey.*
                </p>
                <br />
                <a
                  className="btn btn-warning m-4"
                  href="https://www.youtube.com/watch?v=I9XRrlOOazo&list=PL4cUxeGkcC9gQeDH6xYhmO-db2mhoTSrT"
                >
                  <h2>Click Here For Full Playlist</h2>
                </a>
              </div>
              <div className="m-2">
                <CSSyoutube />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-around m-4">
          <div className="card col-9" id="tutorialCard">
            <h2 className="card-header">Expert</h2>
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="m-2">
                  {" "}
                  This playlist is a combination of HTML and CSS to create a
                  more complete website. Follow the link to get started and get
                  your very first HTML and CSS page created!
                </h2>
                <br />
                <p className="m-2">
                  {" "}
                  Note that we are not the creators of this video series and
                  only used them as a guide through our Web Developer journey.*
                </p>
                <br />
                <a
                  className="btn btn-warning m-4"
                  href="https://www.youtube.com/watch?v=Wm6CUkswsNw&list=PLillGF-RfqbZTASqIqdvm1R5mLrQq79CU&index=3"
                >
                  <h2>Click Here To Watch The Playlist</h2>
                </a>
              </div>
              <div className="m-2">
                <CSSyoutubeHRD />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Css;
