import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import { auth, db } from "../../firebase";
import * as routes from "../../constants/routes";

import styled from "styled-components";

import SignUpWithGoogle from "./Google";
import SignUpWithGithub from "./Github";

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
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  created_at: "",
  error: null
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    this.state.created_at = new Date().toString();
  }

  onSubmit = event => {
    const { username, email, passwordOne, created_at } = this.state;

    const { history } = this.props;

    auth
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.user.uid, username, email, created_at)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName("error", error));
          });
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      username === "" ||
      email === "";

    return (
      <div>
        <SignUpWithGoogle />
        <SignUpWithGithub /> <br />
        <br />
        <form onSubmit={this.onSubmit}>
          <input
            value={username}
            onChange={event =>
              this.setState(
                updateByPropertyName("username", event.target.value)
              )
            }
            type="text"
            placeholder="Full Name"
            className="large"
          />
          <input
            value={email}
            onChange={event =>
              this.setState(updateByPropertyName("email", event.target.value))
            }
            type="text"
            placeholder="Email Address"
            className="large"
          />
          <input
            value={passwordOne}
            onChange={event =>
              this.setState(
                updateByPropertyName("passwordOne", event.target.value)
              )
            }
            type="password"
            placeholder="Password"
            className="large"
          />
          <input
            value={passwordTwo}
            onChange={event =>
              this.setState(
                updateByPropertyName("passwordTwo", event.target.value)
              )
            }
            type="password"
            placeholder="Confirm Password"
            className="large"
          />
          <Button disabled={isInvalid} type="submit">
            Sign Up
          </Button>

          {error && <p>{error.message}</p>}
        </form>
        <br />
        <p>
          Already have an account? <Link to={routes.SIGN_IN}>Login</Link>
        </p>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>
);

export default withRouter(SignUpForm);

export { SignUpLink };
