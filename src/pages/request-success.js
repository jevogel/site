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
            Thank you for your request! <br /> <br /> We'll try our best to
            create content to your request, and we'll email you as soon as we
            fulfill it! If you have any questions, please email us at
            team@enlight.nyc
          </h3>
        </SignElements>
      </div>
    );
  }
}

export default SuccessPage;
