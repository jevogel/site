import React, { Component } from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";

import styled from "styled-components";
import Header from "../components/Header";

import PostContainer from "./post-elements/Container";
import Date from "./post-elements/Date";
import ViewCounter from "./post-elements/ViewCounter";
import PostData from "./post-elements/PostData";
import ShareData from "./post-elements/ShareData";

import Footer from "../components/Footer";
import { Container, Row, Col } from "react-grid-system";

import AuthUserContext from "../components/Session/AuthUserContext";
import withAuthorization from "../components/Session/withAuthorization";

import * as routes from "../constants/routes";

import { BrowserView, isBrowser } from "react-device-detect";

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

import Disqus from "disqus-react";

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  border: 3px solid #e4e4e4;
  color: #333;
  border-radius: 5px;
  margin-right: 5px;
  font-weight: bold;
  background-color: #fff;
  z-index: 500;
  display: inline;
  vertical-align: middle;

  &:hover {
    background: #fff;
    border: 3px solid #438cee;
    color: #333;
    transition: all 300ms ease;
    cursor: pointer;
  }
`;

class BlogPostTemplate extends Component {
  constructor(props) {
    super(props);
    this.handleCodeClick = this.handleCodeClick.bind(this);
    this.state = { isInCodeMode: false };
  }

  handleCodeClick() {
    this.setState({ isInCodeMode: true });
  }

  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = get(this.props, "data.site.siteMetadata.title");
    const { previous, next } = this.props.pathContext;

    const url = `https://enlight.nyc/${post.frontmatter.id}`;
    const identifier = `${post.frontmatter.id}`;
    const title = `${post.frontmatter.title}`;

    const disqusShortname = "enlight-2";
    const disqusConfig = {
      url: url,
      identifier: identifier,
      title: title
    };

    const Title = styled.h1`
      font-size: 3rem;
      padding: 1%;
    `;

    const Image = styled.img`
      height: 25px;
    `;

    const ReplButton = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
    `;

    const eligibleForCodeMode = post.frontmatter.embed;
    var CodeButton;
    if (eligibleForCodeMode) {
      CodeButton = (
        <a href="#code">
          <Button onClick={this.handleCodeClick}>
            <ReplButton>
              <Image src="https://avatars3.githubusercontent.com/u/983194?s=280&v=4" />&nbsp;
              Start Coding
            </ReplButton>
          </Button>
        </a>
      );
    } else {
      CodeButton = <div />;
    }

    const Buttons = () => (
      <AuthUserContext.Consumer>
        {authUser => (authUser ? <ButtonAuth /> : <ButtonNonAuth />)}
      </AuthUserContext.Consumer>
    );

    const ButtonAuth = () => (
      <div>
        <div>
          <a href={`${post.frontmatter.source}`}>
            <Button>Source</Button>
          </a>
          <a href={`${post.frontmatter.demourl}`}>
            <Button>Demo</Button>
          </a>
          <BrowserView device={isBrowser}>{CodeButton}</BrowserView>
        </div>
      </div>
    );

    const ButtonNonAuth = () => (
      <div>
        <Link to={routes.SIGN_IN}>
          <Button>Login to Download Project & Start Coding</Button>
        </Link>
      </div>
    );

    const isInCodeMode = this.state.isInCodeMode;
    var Tutorial;
    if (isInCodeMode) {
      Tutorial = (
        <Container fluid style={{ lineHeight: "32px" }}>
          <br />
          <br />

          <Row>
            <Col>
              <div
                className="pv4 pa2 post repl-tutorial"
                id="code"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </Col>
            <Col>
              <iframe
                frameborder="0"
                width="100%"
                height="100%"
                class="repl"
                src={`${post.frontmatter.embedURL}`}
              />
            </Col>
          </Row>
          <br />
          <br />
          <br />
        </Container>
      );
    } else {
      Tutorial = (
        <div
          className="pv4 pa2 post tutorial"
          id="code"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      );
    }

    return (
      <div>
        <Helmet
          title={`${post.frontmatter.title} in ${
            post.frontmatter.language
          } | ${siteTitle}`}
          meta={[
            { name: "description", content: `${post.frontmatter.desc}` },
            {
              name: "og:title",
              content: `${post.frontmatter.title} in ${
                post.frontmatter.language
              }`
            },
            {
              name: "og:description",
              content: `${post.frontmatter.desc}`
            },
            {
              name: "og:url",
              content: `https://enlight.nyc/${post.frontmatter.id}`
            },
            {
              name: "og:image",
              content: `https://enlight.nyc${post.frontmatter.img}`
            },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:site", content: "@tryenlight" },
            {
              name: "twitter:title",
              content: `${post.frontmatter.title} in ${
                post.frontmatter.language
              }`
            },
            {
              name: "twitter:url",
              content: `https://enlight.nyc/${post.frontmatter.id}`
            },
            {
              name: "twitter:description",
              content: `${post.frontmatter.desc}`
            },
            {
              name: "twitter:image",
              content: `https://enlight.nyc${post.frontmatter.img}`
            }
          ]}
        />
        <Header />
        <div
          id="project"
          ref={project => {
            this.project = project;
          }}
        >
          <article className="dt w-100 tc post">
            <div className="dtc v-top tc black pt1">
              <Title>
                <span>{post.frontmatter.title}</span>
              </Title>
              <a href={`${post.frontmatter.demourl}`}>
                <img className="project-image ma2" src={post.frontmatter.img} />
              </a>
              <br />
              <br />
              <Buttons />
              <a href={post.frontmatter.writerURL}>
                <h3 className="f4 fw3 tc link">By {post.frontmatter.writer}</h3>
              </a>
            </div>
          </article>
        </div>
        <PostContainer>
          <ShareData>
            <TwitterShareButton className=" social" url={url} title={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <FacebookShareButton className="social" url={url} title={title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton className=" social" url={url} title={title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <RedditShareButton className="social" url={url} title={title}>
              <RedditIcon size={32} round />
            </RedditShareButton>
            <EmailShareButton className="social" url={url} title={title}>
              <EmailIcon size={32} round />
            </EmailShareButton>
          </ShareData>
          <PostData>
            <Date>{post.frontmatter.date}</Date>
            <ViewCounter id={post.frontmatter.id} /> &nbsp; &nbsp; &nbsp;
          </PostData>
          <br />
          <br />

          {Tutorial}

          <br />

          <Link to="/chat">
            <div className="chat-card">
              <h3> Discuss this project on the community chat.</h3>
              <p>
                {" "}
                Visit <span className="title">enlight </span> Chat!{" "}
              </p>
            </div>
          </Link>
          <br />
          <br />
          <div className="article pa2 tutorial">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </PostContainer>
        <Footer />
      </div>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        desc
        writer
        writerURL
        difficulty
        category
        img
        demourl
        source
        language
        id
        embed
        embedURL
      }
    }
  }
`;
