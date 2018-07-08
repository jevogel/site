import React, { Component } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";
import Footer from "./Footer";

import CarbonAd from "./Ad";

const Card = styled.div`
  border-radius: 10px;
  height: 320px;
  margin: 20px;
  background: #fcfcfc;
  -moz-box-shadow: 0 0 5px #e4e4e4;
  -webkit-box-shadow: 0 0 5px #e4e4e4;
  box-shadow: 0 0 5px #e4e4e4;
  transition: all 200ms ease;

  &:hover {
    -moz-box-shadow: 0 0 30px #e4e4e4;
    -webkit-box-shadow: 0 0 30px #e4e4e4;
    box-shadow: 0 0 30px #e4e4e4;
  }
`;

const Space = styled.div`
  height: 100px;
  width: 100%;
`;

const Title = styled.h1`
  margin-top: 30px;
  font-weight: 600;
  text-align: center;
  font-size: 1.75em;
  color: #191919;
  @media only screen and (max-width: 1024px) {
    margin-top: 5px;
  }
`;

const Description = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: #000;
  padding: 5%;
`;

const Site = styled.div`
  max-width: 100%;
`;

const List = styled.div`
  max-width: 95%;
  margin: auto;
`;

// const Sort = styled.div``;

const Left = styled.div`
  float: left;
  padding-left: 20px;
  color: #000;
  top: 310px;
  font-size: 13px;
  position: absolute;
`;

const Right = styled.div`
  float: right;
  padding-right: 20px;
  color: #545659;
  top: 310px;
  font-size: 13px;
  right: 35px;
  position: absolute;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

function Project(props) {
  return (
    <a href={props.url}>
      <Card className="project">
        <img src={props.img} />
        <Title>{props.title}</Title>
        <Left> {props.language}</Left>
        <Right> {props.difficulty}</Right>
      </Card>
    </a>
  );
}

// make this dynamic with a pageQuery

const Projects = () => (
  <div id="projects">
    <Site>
      <List>
        <Container fluid>
          <Row>
            <Col sm={4}>
              <Project
                url="/y-combinator#project"
                img="/img/y-comb.png"
                title="Deriving the Y Combinator"
                difficulty="advanced"
                language="JavaScript"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/neural-network#project"
                img="/img/nn.png"
                title="Neural Network"
                difficulty="advanced"
                language="Python"
              />
            </Col>

            <Col sm={4}>
              <Project
                url="/create-ml#project"
                img="https://raw.githubusercontent.com/frogg/CreateML-Tomato-Banana/master/screenshots/xcode%20playground.png"
                title="Image Classification with CreateML"
                difficulty="beginner"
                language="Swift"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/blockchain#project"
                img="/img/blockchain.jpeg"
                title="Blockchain"
                difficulty="intermediate"
                language="Node.js"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/nodejs-chat#project"
                img="/img/nodejs-chat.gif"
                title="Real Time Chat App"
                difficulty="intermediate"
                language="Node.js"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/snowglobe-threejs#project"
                img="img/snowglobe.gif"
                title="3D Snowglobe"
                difficulty="beginner"
                language="Three.js"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/twitter-bot#project"
                img="/img/twitter-bot.png"
                title="Twitter Bot"
                difficulty="intermediate"
                language="Node.js"
              />
            </Col>

            <Col sm={4}>
              <Project
                url="/web-paint#project"
                img="/img/web-paint.gif"
                title="Web Paint App"
                difficulty="intermediate"
                language="HTML/CSS/JS"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/weather#project"
                img="/img/weather.gif"
                title="Geolocation Weather App"
                difficulty="intermediate"
                language="HTML/CSS/JS"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/hex-color-generator#project"
                img="/img/color.gif"
                title="Hex Color Generator"
                difficulty="beginner"
                language="HTML/CSS/JS"
              />
            </Col>

            <Col sm={4}>
              <Project
                url="/ethereum-token#project"
                img="/img/ethereum.jpg"
                title="Ethereum Token"
                difficulty="beginner"
                language="Solidity"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/stock-market-prediction#project"
                img="/img/stock.png"
                title="Stock Prediction Algorithm"
                difficulty="beginner"
                language="Python"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/code-editor#project"
                img="/img/code-editor.gif"
                title="HTML/CSS/JS Editor"
                difficulty="beginner"
                language="HTML/CSS/JS"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/quote#project"
                img="/img/quote.gif"
                title="Quote Generator"
                difficulty="beginner"
                language="HTML/CSS/JS"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/clock#project"
                img="/img/clock.gif"
                title="Clock"
                difficulty="beginner"
                language="HTML/CSS/JS"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/to-do#project"
                img="/img/to-do.gif"
                title="To-do List"
                difficulty="beginner"
                language="HTML/CSS/JS"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/text-editor#project"
                img="/img/text-editor.gif"
                title="Text Editor"
                difficulty="beginner"
                language="HTML/CSS/JS"
              />
            </Col>
            <Col sm={4}>
              <Project
                url="/guess-number#project"
                img="/img/guess-number.gif"
                title="Guessing Number Game"
                difficulty="beginner"
                language="Python"
              />
            </Col>
          </Row>
        </Container>
      </List>
      <Space />
      <Footer />
    </Site>
  </div>
);

export default Projects;
