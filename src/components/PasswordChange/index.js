import React, { Component } from "react";

import { auth } from "../../firebase";

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
}all 300ms ease;
  }
`;

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    auth
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName("error", error));
      });

    event.preventDefault();
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;

    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";

    return (
      <div>
        <Label> Change Password </Label>

        <form onSubmit={this.onSubmit}>
          <input
            value={passwordOne}
            onChange={event =>
              this.setState(
                updateByPropertyName("passwordOne", event.target.value)
              )
            }
            type="password"
            placeholder="New Password"
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
            placeholder="Confirm New Password"
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

export default PasswordChangeForm;
