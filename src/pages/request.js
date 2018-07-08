import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import withAuthorization from "../components/Session/withAuthorization";
import { db } from "../firebase";

import Header from "../components/Header";

import RequestChat from "../components/Chat/Request";

class HomePage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Helmet title="Enlight Community" />
        <Header />

        <h1
          className="chat-title"
          ref={messages => {
            this.messages = messages;
          }}
        >
          <span className="title">enlight /</span> project requests <br />
        </h1>

        <RequestChat />
      </div>
    );
  }
}

HomePage.contextTypes = {
  authUser: PropTypes.object
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
