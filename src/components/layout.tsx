import React from 'react'
// import "./wow.css"

import { StyleReset, ThemeProvider, Div } from 'atomize'

const theme = {
  fontFamily: {
    primary:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
    secondary:
      '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
    code:
      'Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace',
  },
  grid: {
    containerMaxWidth: {
      xl: '1184px',
    },
  },
  colors: {
    brandgray: '#F7F5F4',
  },
}

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyleReset />
      <Div tag="main" overflow="hidden">
        {children}
      </Div>
    </ThemeProvider>
  )
}
