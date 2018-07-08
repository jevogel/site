import React, { Component } from "react";

export default class Carbon extends Component {
  componentDidMount() {
    if (this.container) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.carbonads.com/carbon.js?serve=CK7D6K7W&placement=enlightnyc";
      script.async = true;
      script.id = "_carbonads_js";
      this.container.appendChild(script);
    }
  }

  render() {
    return (
      <div
        {...this.props}
        ref={container => {
          this.container = container;
        }}
      />
    );
  }
}
