import React from 'react';
import Header from '../components/Header';

import SignUpForm from '../components/SignUp';

import styled from 'styled-components'

const SignElements = styled.div`
padding: 4%;
font-size: 20px;
`
const SignUpPage = () =>
  <div>
  <Header />
  <SignElements>
    <h1>Sign Up</h1>
    <SignUpForm />
  </SignElements>
  </div>

export default SignUpPage;
