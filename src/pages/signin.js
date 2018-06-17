import React from 'react';
import styled from 'styled-components'
import SignInForm from '../components/SignIn';
import { SignUpLink } from '../components/SignUp';
import { PasswordForgetLink } from '../components/PasswordForget';

import Header from '../components/Header';

const SignElements = styled.div`
padding: 4%;
font-size: 20px;
`
const SignInPage = () =>
  <div>
  <Header/>
  <SignElements>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </SignElements>
  </div>

export default SignInPage;
