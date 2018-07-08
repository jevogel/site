import React, { Component } from "react";
import styled from "styled-components";

const CounterText = styled.div`
  color: #545659;
  letter-spacing: 2px;
  font-size: 20px;
  text-transform: uppercase;
  display: inline-block;
  font-weight: bold;
`;
class ViewCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: []
    };
  }
  componentDidMount() {
    const URL = "https://enlight-views.now.sh/?id=";
    const id = this.props.id;
    fetch(URL + id)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.total }));
  }

  render() {
    const { hits } = this.state;
    return <CounterText>&nbsp;- {hits} views</CounterText>;
  }
}

export default ViewCounter;
