import React from "react";
import styled, { injectGlobal } from "styled-components";
import Particles from "./Particles";
import Navigation from "./Navigation";

import Link from "gatsby-link";

import { auth } from "./../firebase";

import AuthUserContext from "./Session/AuthUserContext";
import * as routes from "./../constants/routes";

import CarbonAd from "./Ad";

import { BrowserView, isBrowser } from "react-device-detect";

const Title = styled.h1`
  font-weight: 600;
  font-size: 5rem;
  text-align: center;
  user-select: none;
  color: #fff;
  position: absolute;
  padding: 0;
  margin: 0;
  top: 65px;
  @media only screen and (max-width: 1024px) {
    top: 30px;
    text-align: center;
    position: relative;
  }
  @media only screen and (max-width: 600px) {
    top: 10px;
  }
`;

const Subtitle = styled.h1`
  font-size: 1.4rem;
  color: #fff;
  font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Arial", sans-serif;
  position: absolute;
  top: 165px;
  margin: 0;
  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const Overlay = styled.div`
  padding-left: 3%;
`;

const Background = styled.div`
  height: ${props => props.h};
  background: ${props => props.gradient};
  z-index: 0;
`;

const Welcome = ({ title, c }) => (
  <Background gradient={c} h="35vh">
    <Particles />
    <Overlay>
      <Link to="/home">
        <Title className="title">{title}</Title>
      </Link>
      <Subtitle>
        Build and share programming projects with 1,700+ Enlight users.
      </Subtitle>
    </Overlay>

    <Navigation />
    <BrowserView device={isBrowser}>
      <CarbonAd />
    </BrowserView>
  </Background>
);

export default Welcome;
