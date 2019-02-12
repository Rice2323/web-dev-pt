import React, { Component } from "react";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import IconRow from "../components/IconRow";
import Homeheader from "../components/Homeheader.jsx";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: 50,
              zIndex: 100,
              color: "yellow",
              width: "100%"
            }}
          >
            <div className="container">
              <div className="row">
                <div className="mx-auto">
                  <h1
                    style={{
                      fontFamily: "Permanent Marker"
                    }}
                  >
                    Web Dev Point
                  </h1>
                  <p>
                    Learn to design, build and deploy professional websites
                    using HTML, CSS, JavaScript, Node, MongoDB, and React!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Homeheader />
        </div>
        <div className="container">
          <h2>Welcome</h2>
          <p>
            Learn to code, gain a new skill, get a new job, improve your life
            for you and your family. Whatever your goal we will help you get
            there. This website was created by coding bootcamp students who
            embarked in a mission to learn how to code. This collection of
            information include tools that helped us along our journey. I hope
            this guide to web development will change your lives just as it did
            ours. You too can teach yourself how to code and with a little
            guidance and hard work youll be writing full stack applications
            bringing you one step closer to achieving your dreams.
          </p>
        </div>
        <IconRow />
        <br />
        <Footer />
      </div>
    );
  }
}

export default Home;
