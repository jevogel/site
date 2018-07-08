import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  line-height: 1.5;
  font-size: 1.3em;
  .post a {
    color: #2f80ed;
    border-bottom: 1px solid #d3d3d3;
    transition: all 300ms ease;
  }

  .post a:hover {
    opacity: 0.4;
  }
`;
export default Container;
