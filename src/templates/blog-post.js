import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import get from "lodash/get";

import styled from "styled-components";
import Header from "../components/Header";

import Container from "./post-elements/Container";
import Back from "./post-elements/Back";
import Date from "./post-elements/Date";
import ViewCounter from "./post-elements/ViewCounter";
import PostData from "./post-elements/PostData";

import Footer from "../components/Footer";

import Disqus from "disqus-react";

import scrollToElement from "scroll-to-element";

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    scrollToElement("#project", {
      duration: 2
    });
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

    return (
      <div>
        <Back>
          <Link to="/">&#8592;</Link>
        </Back>
        <Helmet
          title={`${post.frontmatter.title} | ${siteTitle}`}
          meta={[
            { name: "description", content: `${post.frontmatter.desc}` },
            { name: "og:title", content: `${post.frontmatter.title}` },
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
            { name: "twitter:title", content: `${post.frontmatter.title}` },
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
        <div id="project" ref="project">
          <article class="dt w-100 tc post">
            <div class="dtc v-top tc black pt1">
              <h1 class="f1 f-subheadline-l fw6 tc">
                <span>{post.frontmatter.title}</span>
              </h1>
              <a href={`${post.frontmatter.demourl}`}>
                <img class="project-image" src={post.frontmatter.img} />
              </a>
              <br />
              <br />
              <a
                href={`${post.frontmatter.source}`}
                class="f4 mh1 link ba ph3 pv2 mb2 dib black button"
              >
                Source
              </a>
              <a
                href={`${post.frontmatter.demourl}`}
                class="f4 mh1 link ba ph3 pv2 mb2 dib black button"
              >
                Demo
              </a>
              <h3 class="f4 fw3 tc">By {post.frontmatter.writer}</h3>
            </div>
          </article>
        </div>
        <Container>
          <PostData>
            <Date>{post.frontmatter.date}</Date>
            <ViewCounter id={post.frontmatter.id} /> &nbsp; &nbsp; &nbsp;
            <a
              href="https://twitter.com/share"
              class="twitter-share-button"
              data-show-count="false"
              data-size="large"
            >
              Tweet
            </a>
            <script
              async
              src="//platform.twitter.com/widgets.js"
              charset="utf-8"
            />
          </PostData>
          <br />
          <div
            className="pv4 pa2 post "
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="article">
            <Disqus.CommentCount
              shortname={disqusShortname}
              config={disqusConfig}
            >
              Comments
            </Disqus.CommentCount>
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </Container>
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
        difficulty
        category
        img
        demourl
        source
        language
        id
      }
    }
  }
`;
