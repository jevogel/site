import React from 'react';

import AuthUserContext from '../components/Session/AuthUserContext';
import { PasswordForgetForm } from '../components/PasswordForget';
import PasswordChangeForm from '../components/PasswordChange';
import withAuthorization from '../components/Session/withAuthorization';

import { auth } from './../firebase';

import Header from '../components/Header';
import styled from 'styled-components'

const SignElements = styled.div`
padding: 4%;
font-size: 20px;
`

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  border: 5px solid #438cee;
  color: #438cee;
  border-radius: 5px;
  margin-right: 5px;
  font-weight: bold;
  background-color: #fff;
  z-index: 500;


  &:hover {
    background: #438cee;
    color: #fff;
    transition: all 300ms ease;
  }
`

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
      <Header />
      <SignElements>
      <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm /> <br/><br/>
        <Button onClick={auth.doSignOut}>Sign Out</Button>

      </SignElements>

      </div>
    }
  </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
