import React from "react";
import Helmet from "react-helmet";

// import Navigation from '../components/Navigation';
import withAuthentication from "../components/Session/withAuthentication";

import "./index.css";
import "./tachyons.css";

require("prismjs/themes/prism-solarizedlight.css");

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Enlight"
      meta={[
        { name: "description", content: "Learn to code by building projects." },
        { name: "og:title", content: "Enlight" },
        {
          name: "og:description",
          content: "Learn to code by building projects."
        },
        { name: "og:url", content: "https://enlight.nyc/" },
        { name: "og:image", content: "https://enlight.nyc/logo.jpg" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:site", content: "@tryenlight" },
        {
          name: "twitter:url",
          content: "https://enlight.nyc/"
        },
        { name: "twitter:title", content: "Enlight" },
        {
          name: "twitter:description",
          content: "Learn to code by building projects."
        },
        { name: "twitter:image", content: "https://enlight.nyc/logo.jpg" }
      ]}
    />
    <div className="app container">{children()}</div>
  </div>
);

export default withAuthentication(TemplateWrapper);
