import React from 'react'
// import "./wow.css"

import { Div, Row, Col } from 'atomize'
import Menu from './menu'

export default () => {
  return (
    <Row>
      <Col size="3">
        <Div p="1rem">
          <Menu />
        </Div>
      </Col>
      <Col size="9">
        <Div p="1rem" bg="warning500">
          This is 7 of 12
        </Div>
      </Col>
    </Row>
  )
}
