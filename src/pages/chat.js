import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

import withAuthorization from "../components/Session/withAuthorization";
import { db } from "../firebase";

import Header from "../components/Header";
import CodeChat from "../components/Chat/Code";
import GeneralChat from "../components/Chat/General";
import ContributorChat from "../components/Chat/Contributors";
import FeedbackChat from "../components/Chat/Feedback";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

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
          <span className="title">enlight /</span> community{" "}
          <label>(beta)</label>
          <br />
        </h1>

        <Tabs>
          <div className="channels">
            <TabList>
              <Tab>
                <li>
                  <label>#</label> general{" "}
                </li>
              </Tab>

              <Tab>
                <li>
                  <label>#</label> code{" "}
                </li>
              </Tab>
              <Tab>
                <li>
                  <label>#</label> contributors{" "}
                </li>
              </Tab>
              <Tab>
                <li>
                  <label>#</label> feedback{" "}
                </li>
              </Tab>
            </TabList>
          </div>

          <TabPanel>
            <GeneralChat />
          </TabPanel>
          <TabPanel>
            <CodeChat />
          </TabPanel>
          <TabPanel>
            <ContributorChat />
          </TabPanel>
          <TabPanel>
            <FeedbackChat />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

HomePage.contextTypes = {
  authUser: PropTypes.object
};

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
