import React from "react";

import AuthUserContext from "../components/Session/AuthUserContext";
import { PasswordForgetForm } from "../components/PasswordForget";
import PasswordChangeForm from "../components/PasswordChange";
import withAuthorization from "../components/Session/withAuthorization";

import { auth } from "./../firebase";
import firebase from "firebase/app";
import "firebase/auth";

import Header from "../components/Header";
import styled from "styled-components";
import Footer from "../components/Footer";

import Label from "../components/elements/label.js";

const Container = styled.div`
  margin: 0 auto;
  max-width: 90%;
  font-size: 20px;
  padding: 2%;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  border: 3px solid #e4e4e4;
  color: #333;
  border-radius: 5px;
  margin-right: 5px;
  font-weight: bold;
  background-color: #fff;
  z-index: 500;
  display: block;
  height: 50px;

  &:hover {
    background: #fff;
    border: 3px solid #438cee;
    color: #333;
    transition: all 300ms ease;
    cursor: pointer;
  }
`;

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <Header />
        <Container>
          <Label>Hello, {firebase.auth().currentUser.displayName}</Label>
          <h3>{authUser.email}</h3>
          <hr />
          <PasswordForgetForm />
          <PasswordChangeForm /> <br />
          <br />
          <Button onClick={auth.doSignOut}>Sign Out</Button>
        </Container>
        <Footer />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
