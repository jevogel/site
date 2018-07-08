import React, { Component } from "react";
import "particles.js/particles";

class Particles extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const particlesJS = window.particlesJS;
    particlesJS.load("particles-js", "/particles.json", function() {
      console.log("callback - particles.js config loaded");
    });
  }

  render() {
    return (
      <div>
        <div id="particles-js" />
        <style>
          {`
          #particles-js {
          position:absolute;
           width: 100%;
           height: 35vh;
           z-index:0;
         }

          `}
        </style>
      </div>
    );
  }
}

export default Particles;
