import React from "react";
import styled from "styled-components";
import SignInForm from "../components/SignIn";
import { SignUpLink } from "../components/SignUp";
import { PasswordForgetLink } from "../components/PasswordForget";
import SignUpForm from "../components/SignUp";

import Header from "../components/Header";

const Login = styled.div`
  font-size: 20px;
  margin: 0 auto;
  width: 300px;
`;

const SignInPage = () => (
  <div>
    <Header />
    <Login>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </Login>
  </div>
);

export default SignInPage;
