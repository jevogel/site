// find a way to auto fill in email and send to firebase without using onChange
// right now you can set value to authUser.email and it fills in

import React, { Component } from "react";
import styled from "styled-components";

import Helmet from "react-helmet";

import { Link, withRouter } from "react-router-dom";

import Header from "../components/Header";

import AuthUserContext from "../components/Session/AuthUserContext";
import withAuthorization from "../components/Session/withAuthorization";

import { db } from "../firebase";

import * as routes from "../constants/routes";

const SignElements = styled.div`
  padding: 4%;
  font-size: 20px;
`;
const Message = styled.p`
  line-height: 1.5;
  font-size: 25px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  border: 5px solid #438cee;
  color: #438cee;
  border-radius: 5px;
  margin-right: 5px;
  font-weight: bold;
  background-color: #fff;
  z-index: 500;

  &:hover {
    background: #438cee;
    color: #fff;
    transition: all 300ms ease;
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
      content: ""
    };
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
      this.state.content
    )
      .then(() => {
        this.setState(() => ({
          name: "",
          email: "",
          title: "",
          description: "",
          languages: "",
          imageURL: "",
          demoURL: "",
          content: ""
        }));
        history.push("/success");
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Helmet title="Submit a Project | Enlight" />
        <AuthUserContext.Consumer>
          {authUser => (
            <div>
              <Header />
              <SignElements>
                <h1>Submit a Project</h1>
                <Message>
                  Enlight is open-source, which means we love contributors! Have
                  a project on the web, a cool algorithm you are working on, or
                  a mobile app? Share your knowledge!
                </Message>

                <Message>
                  It doesn’t have to be a specific programming language - just
                  send us whatever you would like to share. Once your post is
                  approved, it will be on Enlight with credit given to you.
                </Message>
                <form onSubmit={this.onSubmit}>
                  <input
                    className="large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("name", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Full Name"
                  />
                  <input
                    className="x-large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("email", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Email"
                  />
                  <input
                    className="x-large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("title", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Project Title"
                  />
                  <input
                    className="x-large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("description", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Project Description"
                  />
                  <input
                    className="x-large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("languages", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Project Language(s)"
                  />
                  <input
                    className="x-large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("imageURL", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Link to project image"
                  />
                  <input
                    className="x-large"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("demoURL", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Link to project demo"
                  />
                  <textarea
                    className="submission"
                    onChange={event =>
                      this.setState(
                        updateByPropertyName("content", event.target.value)
                      )
                    }
                    type="text"
                    placeholder="Tutorial Content in Markdown"
                  />
                  <Button className="large" type="submit">
                    Submit
                  </Button>
                </form>
              </SignElements>
            </div>
          )}
        </AuthUserContext.Consumer>
      </div>
    );
  }
}
const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(withRouter(SubmitPage));
