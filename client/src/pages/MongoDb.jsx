import React, { Component } from "react";
import Footer from "../components/Footer.jsx";
import MongoYoutube from "../components/MongoYoutube";
import MongoYoutubeMID from "../components/MongoYoutubeMID.jsx";
import MongoYoutubeHRD from "../components/MongoYoutubeHRD.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import "./Html.css";

class MongoDb extends Component {
  render() {
    return (
      <div>
        <Jumbotron
          title="MongoDb"
          subtitle="It may take 2 to tango, but after this, you can Mongo all by yourself!"
        />
        <div className="row d-flex justify-content-around m-4">
          <div className="card col-9" id="tutorialCard">
            <h2 className="card-header">Beginner</h2>
            <div className="d-flex justify-content-between">
              <div>
                <h2 className="m-2">
                  {" "}
                  First is a brief intro into what exactly MongoDB is and how
                  it's used.
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
                  href="https://www.youtube.com/playlist?list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u"
                >
                  <h2>Click Here for More </h2>
                </a>
              </div>
              <div className="m-2">
                <MongoYoutube />
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
                  Now you will learn to use MongoDb and begin creating your own
                  non-structured databases.
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
                  href="https://www.youtube.com/user/TechGuyWeb/search?query=mongo"
                >
                  <h2>Click Here for More</h2>
                </a>
              </div>
              <div className="m-2">
                <MongoYoutubeMID />
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
                  Finally, you will make a full CRUD app with MongoDB.
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
                  href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ/search?query=mongo"
                >
                  <h2>Click Here for More</h2>
                </a>
              </div>
              <div className="m-2">
                <MongoYoutubeHRD />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default MongoDb;
