import React from 'react'
import { Div, Row, Col, Container } from 'atomize'
import Menu from './menu'

export default () => {
  return (
    <Row>
      <Col size="12">
        <Container>
          <Menu />
          <Div border={{ t: '2px solid' }} borderColor="gray300" />
        </Container>
      </Col>
    </Row>
  )
}
