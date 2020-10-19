import React from 'react'
// import "./wow.css"

import { StyleReset, ThemeProvider, Div } from 'atomize'

const theme = {
  fontFamily: {
    primary:
      '"SF Pro Text",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    secondary:
      '"SF Pro Display",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
    code: "'Fira Mono','Roboto Mono', monospace",
  },
  grid: {
    containerMaxWidth: {
      xl: '1184px',
    },
  },
  textSize: {
    size: {
      display3: '48px',
    },
    height: {
      display3: '56px',
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
