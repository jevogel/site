import React, { Component } from 'react'
import styled from 'styled-components'

const QuoteText = styled.p`
  color: ${props => props.color};
  letter-spacing: 2px;
  font-style: italic;
  font-size: 2em;
  font-family: Average, Georgia, sans-serif;
`
const Quote = ({ color, quote }) => (
  <div>
    <QuoteText color={color}> {quote} </QuoteText>
  </div>
)

export default Quote
