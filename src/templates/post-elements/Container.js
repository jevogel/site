import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 50em;
  line-height: 1.5;
  margin: 0 auto;
  font-size: 1.3em;
  margin-top: 2em;
  a {
    color: #2f80ed;
    border-bottom: 1px solid #d3d3d3;
    transition: all 300ms ease;
  }

  a:hover {
    opacity: 0.4;
  }
`
export default Container
