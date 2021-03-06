import React, { Component } from "react";
import { Link } from "react-router-dom";

import { auth } from "../../firebase";
import * as routes from "../../constants/routes";

import styled from "styled-components";

import Label from "../elements/label.js";

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
  error: null
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email } = this.state;

    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === "";

    return (
      <div>
        <Label> Forgot Password </Label>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.email}
            onChange={event =>
              this.setState(updateByPropertyName("email", event.target.value))
            }
            type="text"
            placeholder="Email Address"
            className="large"
          />
          <Button disabled={isInvalid} className="large" type="submit">
            Reset My Password
          </Button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={routes.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export { PasswordForgetForm, PasswordForgetLink };
