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
  height: 25px;
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

class SignInWithGithub extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    this.state.created_at = new Date().toString();
  }

  githubLogin = event => {
    const { username, email, created_at } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithGithub()
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
      <Button onClick={this.githubLogin}>
        <Image src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png" />{" "}
        <Provider>Login with Github</Provider>
      </Button>
    );
  }
}

export default withRouter(SignInWithGithub);
