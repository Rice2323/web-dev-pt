import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron.jsx";
import Footer from "../components/Footer.jsx";
import JSyoutubeMID from "../components/JSyoutubeMID";
import JSyoutube from "../components/JSyoutube";
import JSyoutubeHRD from "../components/JSyoutubeHRD";
import "./Html.css";

class JS extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          title="JavaScript"
          subtitle="Javascript! Prepare to become true coders"
        />
        <div className="row d-flex justify-content-around m-4">
          <div className="card col-9" id="tutorialCard">
            <h2 className="card-header">Beginner</h2>
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="m-2">
                  {" "}
                  Take a ride on the JavaScript train and join us on this epic
                  journey of tutorials for beginners. These lessons will be
                  covering all the absolute basics, and get you up and running
                  making on your own JavaScript programs for your websites.
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
                  href="https://www.youtube.com/watch?v=W6NZfCO5SIk&list=PLTjRvDozrdlxEIuOBZkMAK5uiqp8rHUax"
                >
                  <h2>Click Here For Full Playlist</h2>
                </a>
              </div>
              <div className="m-2">
                <JSyoutube />
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
                  Learn the Document Object Model, the interface between
                  JavaScript and HTML elements, and combine HTML, CSS, and
                  JavaScript into exciting interactive sites!{" "}
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
                  href="https://www.youtube.com/watch?v=mPd2aJXCZ2g"
                >
                  <h2>Click Here For Full Playlist</h2>
                </a>
              </div>
              <div className="m-2">
                <JSyoutubeMID />
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
                  Discover more JavaScript techniques and features including
                  arrays, looping, and objects. This video series will walk you
                  through subjects such as object literals, classes,
                  inheritance, and other that fancy sounding stuff that will
                  make you sound like an educated programer.
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
                  href="https://www.youtube.com/watch?v=4l3bTDlT6ZI&list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7"
                >
                  <h2>Click Here For Full Playlist</h2>
                </a>
              </div>
              <div className="m-2">
                <JSyoutubeHRD />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default JS;
