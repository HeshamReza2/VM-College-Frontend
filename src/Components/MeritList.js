import React from 'react'
import './MeritList.css'
import { Col, Container, Row } from 'react-bootstrap'

function MeritList() {
  return (
    <>
      <Container>
        <Row>
          <Col sm='12'>
            <h6>Intake Capacity</h6>
          </Col>

          <Col sm='12'>
            <div>
              <p>Show</p>
              <select id='entries' name='entries'>
                <option value='10'>10</option>
                <option value='25'>25</option>
                <option value='50'>50</option>
                <option value='100'>100</option>
              </select>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MeritList