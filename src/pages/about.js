import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Phrase = styled.div`
  font-weight: 600;
  font-size: 2.5rem;
  color: #000;
  color: #333;
  margin: 0 auto;
  max-width: 90%;
  line-height: 1.5;
`;

const Text = styled.p`
  font-size: 1.5rem;
  color: #333;
  margin: 0 auto;
  max-width: 80%;
  line-height: 1.3;
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

const Landing = () => (
  <div>
    <Header />
    <Container>
      <Phrase className="phrase">
        <span className="title">Why Enlight?</span>
      </Phrase>{" "}
      <br />
      <Text>
        A couple years ago, I started to learn web development. At first, I
        ended up taking many courses and reading books. However, I learned so
        many terms, objects, statements, etc. that I couldn’t really implement
        them. Then, I started to make mini-projects by following tutorials
        online and scraping through code on GitHub, and quite frankly, I learned
        a lot more than I would have doing anything else. I believe that the
        best way to learn is to create. Try, fail, and get back up again. Make
        something cool even if you don't 100% know what you are doing. Then, try
        and make it even better. Trust me, you’ll amaze yourself. <br />
        <br />
        <span className="title"> - Samay Shamdasani</span>
      </Text>
      <br />
      <Phrase className="phrase">
        <span className="title">Contributors</span>
      </Phrase>{" "}
      <br />
      <Text>
        <li>
          <a href="https://shamdasani.org">Samay Shamdasani</a>: Founder
        </li>
        <li>
          <a href="https://github.com/Dhrumin-Shah">Dhrumin Shah</a>:
          Contributor{" "}
        </li>
        <li>
          <a href="https://www.nathanhleung.com/">Nathan Leung</a>: Contributor
        </li>
        <li>
          <a href="https://twitter.com/frederikriedel?lang=en">
            Frederik Riedel
          </a>: Contributor{" "}
        </li>
        <li>
          <a href="https://ichauster.github.io/">Ivan Chau</a>: Contributor{" "}
        </li>
        <li>
          <a href="kabir.sh">Kabir Shah</a>: Contributor{" "}
        </li>
      </Text>
    </Container>
    <Footer />
  </div>
);

export default Landing;
