import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Footer = styled.footer`
  width: 100% !important;
  color: #333;
  padding: 4%;
`;
const FooterComponent = () => (
  <Footer>
    <p>
      © Enlight 2016-2018 by{" "}
      <Link href="https://shamdasani.org">shamdasani.org</Link>
    </p>
  </Footer>
);

export default FooterComponent;
