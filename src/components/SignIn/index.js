import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { auth } from "../../firebase";
import * as routes from "../../constants/routes";

import SignInWithGoogle from "./Google";
import SignInWithGithub from "./Github";

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

  &:hover {
    background: #fff;
    border: 3px solid #438cee;
    color: #333;
    transition: all 300ms ease;
    cursor: pointer;
  }
`;

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div>
        <SignInWithGoogle />
        <SignInWithGithub /> <br />
        <br />
        <form onSubmit={this.onSubmit}>
          <input
            className="large"
            value={email}
            onChange={event =>
              this.setState(updateByPropertyName("email", event.target.value))
            }
            type="text"
            placeholder="Email Address"
          />
          <input
            className="large"
            value={password}
            onChange={event =>
              this.setState(
                updateByPropertyName("password", event.target.value)
              )
            }
            type="password"
            placeholder="Password"
          />
          <Button className="large" disabled={isInvalid} type="submit">
            Sign In
          </Button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

export default withRouter(SignInForm);
