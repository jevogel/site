import React from "react";

import { PasswordForgetForm } from "../components/PasswordForget";

import Header from "../components/Header";
import styled from "styled-components";

const SignElements = styled.div`
  padding: 4%;
  font-size: 20px;
`;

const PasswordForgetPage = () => (
  <div>
    <Header />
    <SignElements>
      <PasswordForgetForm />
    </SignElements>
  </div>
);

export default PasswordForgetPage;
