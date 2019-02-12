import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron.jsx";
import Footer from "../components/Footer.jsx";
//import BSTPyoutube from "../components/BSTPyoutube.jsx";
import BSTPyoutubeMID from "../components/BSTPyoutube.MID";
import BSTPyoutubeHRD from "../components/BSTPyoutubeHRD.jsx";
import "./Html.css";

class Bootstrap extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          title="Bootstrap"
          subtitle="Bootstrap is by far the easiest way to organize your page to look clean and professional"
        />
        <div className="row d-flex justify-content-around m-4">
          <div className="card col-9" id="tutorialCard">
            <h2 className="card-header sm-col-3 md-col-3">Beginner</h2>
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="m-2">
                  {" "}
                  Bootstrap is very easy to learn, most of it if not all is
                  really drag and drop. We highly reccomend you go through the
                  documentation and read all about components, grids (very
                  useful) and everything available from their docs page.
                </h2>
                <br />
                {/* <p className="m-2"> Note that we are not the creators of this video series and only used them as a guide through our Web Developer journey.*</p>
          <br></br> */}
                <a
                  className="btn btn-warning m-4"
                  href="https://getbootstrap.com/docs/4.0/getting-started/introduction/"
                >
                  <h2>Click Here To Read Their Documentation</h2>
                </a>
              </div>
              {/* <div className="m-2">
          <BSTPyoutube/>
          </div> */}
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
                  about Bootstrap.
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
                  href="https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA"
                >
                  <h2>Click Here To Follow The Channel</h2>
                </a>
              </div>
              <div className="m-2">
                <BSTPyoutubeMID />
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
                  With all the knowledge you have learned in this video we will
                  build A Responsive Bootstrap Website Start To Finish with
                  Bootstrap 4, HTML5 & CSS3!
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
                  href="https://www.youtube.com/channel/UCtXGz0MBuqZUC8rmGddc07Q"
                >
                  <h2>Click Here To Follow The Channel</h2>
                </a>
              </div>
              <div className="m-2">
                <BSTPyoutubeHRD />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Bootstrap;
