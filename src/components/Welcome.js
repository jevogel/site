import React from "react";
import styled, { injectGlobal } from "styled-components";
import Particles from "./Particles";
import Link from "gatsby-link";

import { auth } from "./../firebase";

import AuthUserContext from "./Session/AuthUserContext";
import * as routes from "./../constants/routes";

const Title = styled.h1`
  font-weight: 600;
  font-size: 5rem;
  text-align: center;
  user-select: none;
  color: #fff;
  position: absolute;
  padding: 0;
  margin: 0;
`;

const Subtitle = styled.h1`
  font-size: 1.5rem;
  color: #fff;
  font-family: Lato, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    "Arial", sans-serif;
  position: relative;
  top: 90px;
  padding-top: 10px;
  margin: 0;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  border: 5px solid #f3f3f3;
  color: #f3f3f3;
  border-radius: 5px;
  margin-right: 5px;
  font-weight: bold;
  position: relative;
  top: 110px;
  background-color: transparent;
  z-index: 500;

  &:hover {
    background: #f3f3f3;
    color: #438cee;
    transition: all 300ms ease;
  }
`;
const Overlay = styled.div`
  padding: 4%;
`;

const Background = styled.div`
  height: ${props => props.h};
  background: ${props => props.gradient};
  z-index: 0;
`;

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <div>
    <Link to={routes.SUBMIT}>
      <Button>Submit Project</Button>
    </Link>
    <Link to={routes.ACCOUNT}>
      <Button>Account</Button>
    </Link>
  </div>
);

const NavigationNonAuth = () => (
  <div>
    <Link to={routes.SIGN_IN}>
      <Button>Sign In</Button>
    </Link>
    <Link to={routes.SIGN_UP}>
      <Button>Sign Up</Button>
    </Link>
  </div>
);

const Welcome = ({ title, c }) => (
  <Background gradient={c} h="40vh">
    <Particles />
    <Overlay>
      <Title className="title">{title}</Title>
      <Subtitle className="subtitle">
        Build and share programming projects with 1,700+ Enlight users.
      </Subtitle>
      <Navigation />
    </Overlay>
  </Background>
);

export default Welcome;

// Put this after you implement the tracks!
// const NavigationAuth = () => (
//   <div>
//     <Link to={routes.TRACKS}>
//       <Button>Start Coding</Button>
//     </Link>
//     <Link to={routes.SUBMIT}>
//       <Button>Submit Project</Button>
//     </Link>
//     <Link to={routes.ACCOUNT}>
//       <Button>Account</Button>
//     </Link>
//   </div>
// );
