import React, { Component } from "react";
import styled from "styled-components";

import Header from "../components/Header";

const SignElements = styled.div`
  padding: 4%;
  font-size: 20px;
`;

class SuccessPage extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignElements>
          <h3>
            Thank you for your submission! <br /> <br /> We will email your
            status to you soon. If you do not hear from us within one week,
            please email us at team@enlight.nyc
          </h3>
        </SignElements>
      </div>
    );
  }
}

export default SuccessPage;
