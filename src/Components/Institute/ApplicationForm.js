import React from 'react'
import './ApplicationForm.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router'

function ApplicationForm() {
    const location = useLocation()

    console.log(location.state);
  return (
    <Container fluid>
        <Row>
            <Col sm='12' className='dashboard-header'>
                <div className='dashboard-top'>
                    <a><i class="fa-solid fa-pen-to-square"></i></a>
                    <h6>Application From</h6>
                </div>

                <div className='dashboard-bottom'>
                    <p>Powered By: Gen Next Information Technology </p>

                    <p>Email to: <a href='mailto:developer@gnextit.com'>developer@gnextit.com</a> / <a href='mailto:info@gnextit.com'>info@gnextit.com</a> / <a href='mailto:conplaint@gnextit.com'>conplaint@gnextit.com</a></p>

                    <p>Talk to: 8017010592 / 9734103591</p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default ApplicationForm
