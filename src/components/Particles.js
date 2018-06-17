import React, { Component } from 'react'
import 'particles.js/particles'



class Particles extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const particlesJS = window.particlesJS
    // this.createParticles()
    particlesJS.load('particles-js', '/particles.json', function() {
      console.log('callback - particles.js config loaded')
    })
  }

  // createParticles() {
  //   particlesJS.load('particles-js', '/particles.json', function() {
  //     console.log('callback - particles.js config loaded')
  //   })
  // }

  render() {
    return (
      <div>
        <div id="particles-js" />
        <style>
          {`
          #particles-js {
          position:absolute;
           width: 100%;
           height: 40%;
           z-index:1;
          }
          @media screen and (max-width: 700px) {
             #particles-js {
               height: 100%;
             }
           }

          `}
        </style>
      </div>
    )
  }
}

export default Particles
