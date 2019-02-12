import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="company">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <h4 className="titletwo">Web Dev Point</h4>
                <h4 className="created">Created By:</h4>
                <ul>
                  <li>
                    <a href="https://github.com/henriquez93550">
                      <i className="fab fa-github fa-lg" />
                    </a>{" "}
                    Erick Henriquez
                  </li>
                  <li>
                    <a href="https://github.com/cheddi123">
                      <i className="fab fa-github fa-lg" />
                    </a>{" "}
                    Cheddi Charles
                  </li>
                  <li>
                    <a href="https://github.com/FallenNinja">
                      <i className="fab fa-github fa-lg" />
                    </a>{" "}
                    Edwin Martinez
                  </li>
                  <li>
                    <a href="https://github.com/JaBautista93">
                      <i className="fab fa-github fa-lg" />
                    </a>{" "}
                    John Bautista
                  </li>
                  <li>
                    <a href="https://github.com/rice2323">
                      <i className="fab fa-github fa-lg" />
                    </a>{" "}
                    Brian Rice
                  </li>
                  <li>
                    <a href="https://github.com/Dima757">
                      <i className="fab fa-github fa-lg" />
                    </a>{" "}
                    Dmitry Khazan
                  </li>
                  <li>
                    <a href="https://github.com/">
                      <i className="fab fa-github fa-lg" />
                    </a>{" "}
                    William McLaughlin
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <h4>About Us</h4>
                <p>
                  We are students currently attending the SMU coding bootcamp.
                  If you need in classroom instruction please check them out.
                  Because of them we were able to learn the skills needed to
                  provide this content for free.
                  <br />
                  <a
                    className="smu"
                    style={{
                      textDecoration: "none"
                    }}
                    href="https://techbootcamps.smu.edu/coding/"
                  >
                    SMU Coding Bootcamp
                  </a>
                </p>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <h4>Special Thanks</h4>
                <p>
                  To Jon Lynch there's no way to show gratitude for your
                  contribution to our success. You are great teacher and mentor
                  to all of us.{" "}
                </p>
                <p>
                  To Netreia McNulty thank you for being there for us when we
                  had questions and assisting us through the course of the
                  curriculum.
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <span className="text-muted">
              Web Dev Point &#169; {new Date().getFullYear()}
            </span>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
