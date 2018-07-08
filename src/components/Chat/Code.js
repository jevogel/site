import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { db } from "../../firebase";
import firebase from "firebase/app";
import "firebase/auth";

class CodeChat extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      messages: [],
      users: {},
      timestamp: "",
      sort_key: ""
    };

    this.onAddMessage = this.onAddMessage.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
  }

  componentDidMount() {
    var el = this.refs.messagesList;
    el.scrollTop = el.scrollHeight;
  }

  componentDidUpdate() {
    var el = this.refs.messagesList;
    el.scrollTop = el.scrollHeight;
  }

  componentWillMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );

    db.onCodeMessageAdded(snapshot => {
      this.setState(prevState => ({
        messages: [...prevState.messages, snapshot.val()]
      }));
    });
  }

  onChangeMessage(event) {
    const { value } = event.target;
    this.setState(() => ({ value }));
  }

  onAddMessage(event) {
    event.preventDefault();

    const authUser = firebase.auth().currentUser.uid;
    const { value } = this.state;

    var date = new Date();
    this.state.timestamp = date.toISOString();
    this.state.sort_key = -1 * new Date(this.state.timestamp).getTime();

    const { timestamp, sort_key } = this.state;
    console.log(sort_key);

    db.doCreateCodeMessage(authUser, value, timestamp, sort_key);

    this.setState(() => ({ value: "", timestamp: "", sort_key: "" }));
  }

  render() {
    const { messages, users, value } = this.state;

    return (
      <div>
        <div className="chat" id="code">
          <div className="messages" ref="messagesList">
            <h3> # code </h3>
            {messages.map((message, key) => (
              <Message
                key={key}
                message={message}
                user={users[message.userId]}
                timestamp={message.timestamp}
              />
            ))}
          </div>

          <form onSubmit={this.onAddMessage}>
            <input
              className="message"
              type="text"
              value={value}
              onChange={this.onChangeMessage}
              placeholder="Send a message..."
            />
          </form>
        </div>
      </div>
    );
  }
}

const Message = ({ message, user }) => {
  const messenger = user ? `${user.username}` : "???";

  function convertDate(date) {
    var localDate = new Date(date);
    localDate = localDate.toLocaleString();
    return localDate;
  }

  return (
    <li>
      <span className="info">
        <p className="messenger">{messenger}</p>
        <p className="timestamp">{convertDate(message.timestamp)}</p>
      </span>
      <p className="text">{message.text}</p>
    </li>
  );
};

export default CodeChat;
