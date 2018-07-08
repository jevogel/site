import React from "react";
import Header from "../components/Header";

import SignUpForm from "../components/SignUp";

import styled from "styled-components";

const SignUp = styled.div`
  font-size: 20px;
  margin: 0 auto;
  width: 300px;
`;
const SignUpPage = () => (
  <div>
    <Header />
    <SignUp>
      <SignUpForm />
    </SignUp>
  </div>
);

export default SignUpPage;
