import React, { Component } from "react";
import YouTube from "react-youtube";

class JSyoutubeMID extends Component {
  render() {
    const opts = {
      height: "390",
      width: "600",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <YouTube videoId="0ik6X4DJKCc" opts={opts} onReady={this._onReady} />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default JSyoutubeMID;
