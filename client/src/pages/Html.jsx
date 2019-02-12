import React, { Component } from "react";
import Footer from "../components/Footer.jsx";
import HTMLyoutube from "../components/HTMLyoutube.jsx";
import HTMLyoutubeMID from "../components/HTMLyoutubeMID";
import HTMLyoutubeHRD from "../components/HTMLyoutubeHRD.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import "./Html.css";

class Html extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          title="HTML"
          subtitle="HTML is the first step to becoming a real boy- er we mean Web Dev!"
        />
        <div className="row d-flex justify-content-around m-4">
          <div className="card col-9" id="tutorialCard">
            <h2 className="card-header">Beginner</h2>
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="m-2">
                  {" "}
                  We want to welcome to you this HTML tutorial for beginners
                  course! In this video we'll look at everything we'll be
                  covering in this course, from setting up a web page to
                  creating HTML lists, links images and other cool things.
                </h2>
                <br />
                <p className="m-2">
                  {" "}
                  Note that we are not the creators of this video series and
                  only used them as a guide through our Web Developer journey.*
                </p>
                <br />
                <a
                  className="btn btn-warning"
                  href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9ibZ2TSBaGGNrgh4ZgYE6Cc"
                >
                  <h2>Click Here For Full Playlist</h2>
                </a>
              </div>
              <div className="m-2">
                <HTMLyoutube />
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
                  In this crash course we will cram as much about HTML that I
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
                  className="btn btn-warning"
                  href="https://www.youtube.com/user/TechGuyWeb"
                >
                  <h2>Click Here To Follow The Channel</h2>
                </a>
              </div>
              <div className="m-2">
                <HTMLyoutubeMID />
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
                  In this torial video you will go through a more complex
                  website, convering all of the HTML basics at a faster pace,
                  Keep up!
                </h2>
                <br />
                <p className="m-2">
                  {" "}
                  Note that we are not the creators of this video series and
                  only used them as a guide through our Web Developer journey.*
                </p>
                <br />
                <a
                  className="btn btn-warning"
                  href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ"
                >
                  <h2>Click Here To Follow The Channel</h2>
                </a>
              </div>
              <div className="m-2">
                <HTMLyoutubeHRD />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Html;
