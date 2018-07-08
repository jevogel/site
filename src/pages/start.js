import React, { Component } from "react";
import styled from "styled-components";

import Header from "../components/Header";

const SignElements = styled.div`
  padding: 4%;
  font-size: 20px;
`;

class StartPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignElements>
          <h3>Tracks (In Development)</h3>
        </SignElements>
      </div>
    );
  }
}

export default StartPage;
