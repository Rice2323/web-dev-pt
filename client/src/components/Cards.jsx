import React, { Component } from "react";
import placeHolder from "../images/place-holder.svg";

class Cards extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {/* <img src={someImage} alt="city streets" /> */}
          <div class="row">
            {/* CARD */}
            <div class="col-sm-4">
              <div className="card " style={{ width: "18rem" }}>
                <img src={placeHolder} alt="Card cap" />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            {/* CARD */}
            <div class="col-sm-4">
              <div className="card " style={{ width: "18rem" }}>
                <img src={placeHolder} alt="Card cap" />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            {/* CARD */}
            <div class="col-sm-4">
              <div className="card " style={{ width: "18rem" }}>
                <img src={placeHolder} alt="Card cap" />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              {/* <img src={someImage} alt="city streets" /> */}
              <div class="col-sm-4 mt-4" style={{ margin: "1rem" }}>
                <div className="card" style={{ width: "54rem" }}>
                  <img src={placeHolder} alt="Card cap" />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
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

export default Cards;
