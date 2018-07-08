import React from "react";
import Helmet from "react-helmet";

// import Navigation from '../components/Navigation';
import withAuthentication from "../components/Session/withAuthentication";

import "./index.css";
import "./tachyons.css";

require("./prism.css");

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Enlight | Learn to code by building projects."
      meta={[
        {
          name: "description",
          content:
            "Enlight is a resource aimed to teach anyone to code through building projects. Hosting a wide variety of tutorials and demos, Enlight provides developers with sample projects and explains how they work."
        },
        {
          name: "og:title",
          content: "Enlight | Learn to code by building projects."
        },
        {
          name: "og:description",
          content: "Learn to code by building projects."
        },
        { name: "og:url", content: "https://enlight.nyc/" },
        { name: "og:image", content: "https://enlight.nyc/img/logo.jpg" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@tryenlight" },
        {
          name: "twitter:url",
          content: "https://enlight.nyc/"
        },
        {
          name: "twitter:title",
          content: "Enlight | Learn to code by building projects."
        },
        {
          name: "twitter:description",
          content: "Learn to code by building projects."
        },
        { name: "twitter:image", content: "https://enlight.nyc/img/logo.jpg" }
      ]}
    />
    <div className="app container">{children()}</div>
  </div>
);

export default withAuthentication(TemplateWrapper);
