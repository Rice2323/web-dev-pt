import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="row-mt-5">
        <div className="col-md-6 m-auto">
          <div class="card-body text-center">
            <h1><i class="fab fa-node-js fa-3x"></i></h1>
            <p>Create an account or login</p>
            <Link
              to="/register"
              style={{
                width: "140px",
                borderRadius: "30px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-warning btn-block mx-auto"
            >
              Register
              </Link>
            <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "30px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-warning btn-block mb-2 mx-auto"
            >
              Log In
              </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
