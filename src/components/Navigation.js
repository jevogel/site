import React from "react";
import styled, { injectGlobal } from "styled-components";

import Link from "gatsby-link";

import { auth } from "./../firebase";

import AuthUserContext from "./Session/AuthUserContext";
import * as routes from "./../constants/routes";

const Item = styled.div`
  padding: 10px;
  font-size: 20px;
  color: #f3f3f3;
  border-radius: 5px;
  display: inline;
  float: right;
  margin-right: 20px;
  margin-top: 30px;
  font-weight: bold;
  position: relative;
  top: 0;
  right: 0;
  background-color: transparent;
  z-index: 500;

  &:hover {
    background: #f3f3f3;
    color: #438cee;
    transition: all 300ms ease;
  }

  @media only screen and (max-width: 1024px) {
    float: none;
    margin: 1px;
    top: 60px;
  }

  @media only screen and (max-width: 600px) {
    display: inline-block;
    margin: 0px;
    top: 20px;
    padding: 6px;
  }
`;

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <div className="tc">
    <Link to={routes.ACCOUNT}>
      <Item>Account</Item>
    </Link>

    <Link to={routes.SUBMIT}>
      <Item>Submit</Item>
    </Link>
    <Link to={routes.REQUEST}>
      <Item>Request</Item>
    </Link>
    <Link to={routes.CHAT}>
      <Item>Chat</Item>
    </Link>
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <Link to={routes.SIGN_UP}>
      <Item>Sign Up</Item>
    </Link>
    <Link to={routes.SIGN_IN}>
      <Item>Login</Item>
    </Link>
  </div>
);

const NavigationComponent = () => <Navigation />;

export default NavigationComponent;
