import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { auth, db } from "../../firebase";
import * as routes from "../../constants/routes";

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

const Image = styled.img`
  height: 20px;
  vertical-align: middle;
`;

const Provider = styled.span`
  vertical-align: middle;
`;

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  username: "",
  email: "",
  created_at: "",
  error: null
};

const svg = () => (
  <svg viewBox="0 0 48 48">
    <defs>
      <path
        id="a"
        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
      />
    </defs>
    <clipPath id="b">
      <use href="#a" overflow="visible" />
    </clipPath>
    <path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
    <path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
    <path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
    <path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
  </svg>
);

class SignInWithGoogle extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    this.state.created_at = new Date().toString();
  }

  googleLogin = event => {
    const { username, email, created_at } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithGoogle()
      .then(result => {
        const user = result.user;
        db.doCreateUser(user.uid, user.displayName, user.email, created_at)
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
    return (
      <Button onClick={this.googleLogin}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png" />{" "}
        <Provider>Login with Google</Provider>
      </Button>
    );
  }
}

export default withRouter(SignInWithGoogle);
