import React from "react";
import styled, { injectGlobal } from "styled-components";
import Welcome from "./Welcome";
import Link from "gatsby-link";

injectGlobal`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Helvetica Neue', 'Arial', sans-serif;
}
a {
  text-decoration: none;
}
`;

const Header = () => (
  <main>
    <Welcome c="#2196f3;" title="enlight" />
  </main>
);

export default Header;
