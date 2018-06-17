import React, { Component } from "react";
import styled from "styled-components";
import Tilt from "react-tilt";
import { Container, Row, Col } from "react-grid-system";
import Footer from "./Footer";

const Card = styled.div`
  border-radius: 10px;
  height: 300px;
  margin: 20px;
  background: #fcfcfc;
  -moz-box-shadow: 0 0 15px #e4e4e4;
  -webkit-box-shadow: 0 0 15px #e4e4e4;
  box-shadow: 0 0 15px #e4e4e4;
`;

const Space = styled.div`
  height: 100px;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center
  font-size: 1.75em;
  color: #191919;
`;

const Description = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: #000;
  padding: 5%;
`;

const Site = styled.div`
  max-width: 95%;
  margin: 0 auto;
  height: 100vh;
`;

const Left = styled.div`
  float: left;
  padding-left: 20px;
  color: #000;
  top: 285px;
  font-size: 13px;
  position: absolute;
`;

const Right = styled.div`
  float: right;
  padding-right: 20px;
  color: #545659;
  top: 285px;
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
  <div>
    <Site>
      <Container fluid style={{ lineHeight: "32px" }}>
        <Row>
          <Col sm={4}>
            <Project
              url="/neural-network"
              img="/img/nn.png"
              title="Neural Network"
              difficulty="advanced"
              language="Python"
            />
          </Col>
          <Col sm={4}>
            <Project
              url="/nodejs-chat"
              img="/img/nodejs-chat.gif"
              title="Real Time Chat App"
              difficulty="intermediate"
              language="Node.js"
            />
          </Col>
          <Col sm={4}>
            <Project
              url="/snowglobe-threejs"
              img="img/snowglobe.gif"
              title="3D Snowglobe"
              difficulty="beginner"
              language="Three.js"
            />
          </Col>
        </Row>

        <Row>
          <Col sm={3}>
            <Project
              url="/twitter-bot"
              img="/img/twitter-bot.png"
              title="Twitter Bot"
              difficulty="intermediate"
              language="Node.js"
            />
          </Col>

          <Col sm={3}>
            <Project
              url="/web-paint"
              img="/img/web-paint.gif"
              title="Web Paint App"
              difficulty="intermediate"
              language="HTML/CSS/JS"
            />
          </Col>
          <Col sm={3}>
            <Project
              url="/weather"
              img="/img/weather.gif"
              title="Geolocation Weather App"
              difficulty="intermediate"
              language="HTML/CSS/JS"
            />
          </Col>
          <Col sm={3}>
            <Project
              url="/guess-number"
              img="/img/guess-number.gif"
              title="Guessing Number Game"
              difficulty="beginner"
              language="Python"
            />
          </Col>
        </Row>

        <Row>
          <Col sm={3}>
            <Project
              url="/hex-color-generator"
              img="/img/color.gif"
              title="Hex Color Generator"
              difficulty="beginner"
              language="HTML/CSS/JS"
            />
          </Col>

          <Col sm={3}>
            <Project
              url="/ethereum-token"
              img="/img/ethereum.jpg"
              title="Ethereum Token"
              difficulty="beginner"
              language="Solidity"
            />
          </Col>
          <Col sm={3}>
            <Project
              url="/stock-market-prediction"
              img="/img/stock.png"
              title="Stock Prediction Algorithm"
              difficulty="beginner"
              language="Python"
            />
          </Col>
          <Col sm={3}>
            <Project
              url="/code-editor"
              img="/img/code-editor.gif"
              title="HTML/CSS/JS Editor"
              difficulty="beginner"
              language="HTML/CSS/JS"
            />
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <Project
              url="/quote"
              img="/img/quote.gif"
              title="Quote Generator"
              difficulty="beginner"
              language="HTML/CSS/JS"
            />
          </Col>
          <Col sm={3}>
            <Project
              url="/clock"
              img="/img/clock.gif"
              title="Clock"
              difficulty="beginner"
              language="HTML/CSS/JS"
            />
          </Col>
          <Col sm={3}>
            <Project
              url="/to-do"
              img="/img/to-do.gif"
              title="To-do List"
              difficulty="beginner"
              language="HTML/CSS/JS"
            />
          </Col>
          <Col sm={3}>
            <Project
              url="/text-editor"
              img="/img/text-editor.gif"
              title="Text Editor"
              difficulty="beginner"
              language="HTML/CSS/JS"
            />
          </Col>
        </Row>
        <Space />
      </Container>
      <Footer />
    </Site>
  </div>
);

export default Projects;
