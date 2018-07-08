import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Phrase = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  color: #000;
  color: #333;
  margin: 0 auto;
  max-width: 90%;
  line-height: 1.5;
  @media only screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const Container = styled.div`
  padding: 3%;
  a {
    color: #2f80ed;
    border-bottom: 1px solid #d3d3d3;
    transition: all 300ms ease;
  }
  .phrase a:hover {
    opacity: 0.5;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 1.5rem;
  border: 5px solid #438cee;
  color: #438cee;
  border-radius: 5px;
  margin-right: 5px;
  font-weight: bold;
  background-color: #fff;
  z-index: 500;

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
  }

  &:hover {
    background: #438cee;
    color: #fff;
    transition: all 300ms ease;
  }
`;

const Landing = () => (
  <Container>
    <Phrase className="phrase">
      <span className="title">enlight</span> is an{" "}
      <a href="https://github.com/TryEnlight">open-source</a> and{" "}
      <Link to="/about">community-driven</Link> educational platform for{" "}
      <a href="#projects">learning to code</a>.
    </Phrase>{" "}
    <br />
    <Phrase>
      <Link to="/home">
        <Button>Start Coding</Button>
      </Link>
      <Link to="/about">
        <Button>Learn More</Button>
      </Link>
    </Phrase>
  </Container>
);

export default Landing;
