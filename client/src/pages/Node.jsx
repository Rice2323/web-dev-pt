import React, { Component } from "react";
import Footer from "../components/Footer.jsx";
import NodeYoutube from "../components/NodeYoutube.jsx";
import NodeYoutubeMID from "../components/NodeYoutubeMID";
import NodeYoutubeHRD from "../components/NodeYoutubeHRD.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import "./Html.css";

class NodeJs extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          title="NodeJs"
          subtitle="You'll have Node problem setting up servers when you're done here!"
        />
        <div className="row d-flex justify-content-around m-4">
          <div className="card col-9" id="tutorialCard">
            <h2 className="card-header">Beginner</h2>
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="m-2">
                  {" "}
                  This is a brief into to what exactly NodeJs is, clink the link
                  below for more.
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
                  href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9gcy9lrvMJ75z9maRw4byYp"
                >
                  <h2>Click Here For More</h2>
                </a>
              </div>
              <div className="m-2">
                <NodeYoutube />
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
                  Here you will learn more of what NodeJs is and create a basic
                  Webserver.
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
                  href="https://www.youtube.com/user/TechGuyWeb/search?query=nodejs"
                >
                  <h2>Click Here For More</h2>
                </a>
              </div>
              <div className="m-2">
                <NodeYoutubeMID />
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
                  In this video you will create and entire HTTP server. Learn
                  NodeJs from installation to Heroku Deployment.
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
                  <h2>Click Here For More</h2>
                </a>
              </div>
              <div className="m-2">
                <NodeYoutubeHRD />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NodeJs;
