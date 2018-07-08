// find a way to auto fill in email and send to firebase without using onChange
// right now you can set value to authUser.email and it fills in

import React, { Component } from "react";
import styled from "styled-components";

import Helmet from "react-helmet";

import { Link, withRouter } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Label from "../components/elements/label.js";

import AuthUserContext from "../components/Session/AuthUserContext";
import withAuthorization from "../components/Session/withAuthorization";

import { db, auth } from "../firebase";
import firebase from "firebase/app";
import "firebase/auth";

import * as routes from "../constants/routes";

const Container = styled.div`
  font-size: 20px;
  margin: auto;
  max-width: 90%;
  padding-bottom: 10%;
`;
const Message = styled.p`
  line-height: 1.5;
  font-size: 25px;
`;

const Quote = styled.h1`
  line-height: 1.5;
  font-size: 30px;
`;
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
  &:hover {
    background: #fff;
    border: 3px solid #438cee;
    color: #333;
    transition: all 300ms ease;
    cursor: pointer;
  }
`;

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

class SubmitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      title: "",
      description: "",
      languages: "",
      imageURL: "",
      demoURL: "",
      sourceURL: "",
      content: "",
      created_at: ""
    };
  }

  componentDidMount() {
    let displayName = firebase.auth().currentUser.displayName;
    let email = firebase.auth().currentUser.email;

    this.state.name = displayName;
    this.state.email = email;
    this.state.created_at = new Date().toString();
  }

  onSubmit = event => {
    event.preventDefault();

    const { history } = this.props;

    db.pushSubmission(
      this.state.name,
      this.state.email,
      this.state.title,
      this.state.description,
      this.state.languages,
      this.state.imageURL,
      this.state.demoURL,
      this.state.sourceURL,
      this.state.content,
      this.state.created_at
    )
      .then(() => {
        this.setState(() => ({
          title: "",
          description: "",
          languages: "",
          imageURL: "",
          demoURL: "",
          sourceURL: "",
          content: "",
          created_at: ""
        }));
        history.push("/success");
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    let displayName = firebase.auth().currentUser.displayName;
    let email = firebase.auth().currentUser.email;

    return (
      <div>
        <Helmet title="Submit a Project | Enlight" />
        <AuthUserContext.Consumer>
          {authUser => (
            <div>
              <Header />
              <Container>
                <Label>Submit a Project</Label>
                <Quote>The best way to learn is to teach. </Quote>

                <Message>
                  Enlight is built to be a community of learners who learn,
                  make, and share fun programming projects with each other. Join
                  the contributor community and share your knowledge with the
                  world.
                </Message>
                <form onSubmit={this.onSubmit}>
                  <input
                    className="large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("title", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Project Title"
                  />
                  <input
                    className="large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("description", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Project Description"
                  />
                  <input
                    className="large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("languages", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Project Language(s)"
                  />
                  <input
                    className="large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("imageURL", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Link to project image"
                  />
                  <input
                    className="large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("demoURL", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Link to project demo"
                  />
                  <input
                    className="large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("sourceURL", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Project repository (GitHub)"
                  />
                  <textarea
                    className="submission"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("content", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Write tutorial in markdown..."
                  />
                  <Button className="large" type="submit">
                    Submit
                  </Button>
                </form>
              </Container>

              <Footer />
            </div>
          )}
        </AuthUserContext.Consumer>
      </div>
    );
  }
}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(withRouter(SubmitPage));
