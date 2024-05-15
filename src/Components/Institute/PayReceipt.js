import React from 'react'
import './PayReceipt.css'
import { useLocation } from 'react-router'
import { Col, Container, Row } from 'react-bootstrap'

function PayReceipt() {
    const location = useLocation()

    console.log(location.state)
  return (
    <Container className='receipt-container'>
        <Row className='justify-content-center receipt-container-row'>
            <Col sm='6' className='receipt-container-col receipt-container-col-1'>
                <img src='../vm_logo.png' alt='VM Admission Logo' />

                <div className='receipt-student-details'>
                    <h6>AZAD KUMAR</h6>
                    <p>1234567890</p>
                    <p>a@gmail.com</p>
                    <p>Pawapuri, Nalanda, Bihar</p>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default PayReceipt
