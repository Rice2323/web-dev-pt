import React, { Component } from "react";

class IconRow extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="features">
          <div className="container">
            <div className="row center-xs center-sm center-md center-lg">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <h2>Technologies</h2>
                <p>What you will learn</p>
                {/* Icon row 1 */}
                <div className="row center-xs center-sm center-md center-lg">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <i className="fab fa-html5 fa-3x" />
                    <br />
                    <h4>HTML 5</h4>
                    <p>
                      Learn the basics of HTML5 and start building and editing
                      web pages.
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <i className="fab fa-css3-alt fa-3x" />
                    <br />
                    <h4>CSS 3</h4>
                    <p>Learn to style and visually organize HTML with CSS.</p>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <i className="fab fa-js-square fa-3x" />
                    <br />
                    <h4>Javascript</h4>
                    <p>
                      Learn crucial JavaScript fundamentals needed for front-end
                      and back-end development.
                    </p>
                  </div>
                </div>

                {/* ICON ROW 2 */}
                <div className="row center-xs center-sm center-md center-lg">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <i className="fab fa-node fa-3x" />
                    <br />
                    <h4>Node.Js</h4>
                    <p>
                      Build back-end applications using this popular server side
                      JavaScript platform.
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <i className="fas fa-database fa-3x" />
                    <br />
                    <h4>MongoDB</h4>
                    <p>
                      Build a database using one of the most widely used NoSQL
                      databases.
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                    <i className="fab fa-react fa-3x" />
                    <br />
                    <h4>React</h4>
                    <p>
                      Build blazing fast websites using this JavaScript library.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default IconRow;
