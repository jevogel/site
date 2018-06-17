import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Welcome from './Welcome'
import Link from 'gatsby-link';

injectGlobal`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto','Helvetica Neue', 'Arial', sans-serif;
}
a {
  text-decoration: none;
}
`

// const Fullscreen = styled.div`
//   height: ${props => props.h};
//   background: ${props => props.gradient};
//   z-index: 0;
// `

const Header = () => (
  <main>
  <Link to="/">
    <Welcome
      c="#2196f3;"
      title="enlight">

      </Welcome>
    </Link>

  </main>
)

export default Header
