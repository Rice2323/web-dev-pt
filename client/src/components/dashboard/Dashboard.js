import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div style={{ height: "20vh" }} className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>
              <b>Hi,</b> {user.name.split(" ")[0]}
              <span className="mx-auto">
                {" "}
                you are succesfully logged in to the{" "}
                <span
                  style={{ fontFamily: "Permanent Marker", color: "yellow" }}
                >
                  Forums
                </span>
              </span>
            </h4>
            <button
              style={{
                width: "150px",
                borderRadius: "30px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-warning btn-block mb-2"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
