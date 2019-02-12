import React, { Component } from "react";
import Footer from "../components/Footer.jsx";
import ReactYoutube from "../components/ReactYoutube.jsx";
import ReactYoutubeMID from "../components/ReactYoutubeMID";
import ReactYoutubeHRD from "../components/ReactYoutubeHRD.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import "./Html.css";

class ReactJs extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          title="ReactJs"
          subtitle="We've gotta give them their props, the creators of ReactJs have made creating web app much more simple !"
        />
        <div className="row d-flex justify-content-around m-4">
          <div className="card col-9" id="tutorialCard">
            <h2 className="card-header">Beginner</h2>
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="m-2">
                  {" "}
                  We want to give you a brief intro to ReactJS, what is is and
                  how it's used.
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
                  href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9i0_2FF-WhtRIfIJ1lXlTZR"
                >
                  <h2>Click Here For More</h2>
                </a>
              </div>
              <div className="m-2">
                <ReactYoutube />
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
                  In this crash course you will learn the basics of ReactJs,
                  such as components, props and much, much more.
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
                  href="https://www.youtube.com/user/TechGuyWeb/search?query=reactjs"
                >
                  <h2>Click Here To More</h2>
                </a>
              </div>
              <div className="m-2">
                <ReactYoutubeMID />
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
                  This is a long one, but upon completion, you will know
                  everything you need to be able to build web apps with React.
                  Enjoy!
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
                  href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ/search?query=reactjs"
                >
                  <h2>Click Here For More</h2>
                </a>
              </div>
              <div className="m-2">
                <ReactYoutubeHRD />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default ReactJs;
