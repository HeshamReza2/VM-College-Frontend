import React from 'react'
import './Footer.css'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

function Footer() {
  return (
    <>
        <Container fluid className='footer-container'>
            <Row>
                <Col className='top-nav-footer p-0' sm='6'>
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Terms & Condition</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Refund Policy</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </Col>

                <Col sm='6' className='footer-contact-1'>
                    <ul>
                        <li><a>
                            <div className='footer-head'>
                                <i class="fa-regular fa-clock footer-fa"></i>
                                <h6>Our Timing:</h6>
                            </div>
                            <p>10:00 AM to 4:00 PM (All Working Days)</p>
                        </a></li>
                        
                        <li><a>
                            <div className='footer-head'>
                                <i class="fa-solid fa-phone footer-fa"></i>
                                <h6>Contact Number: </h6>
                            </div>
                            <p>+91-9631265702</p>
                        </a></li>
                        
                        <li><a href="complaint@vmcollege.in">
                            <div className='footer-head'>
                                <i class="fa-solid fa-envelope footer-fa"></i>
                                <h6>Email Us: </h6>
                            </div>
                            <p >complaint@vmcollege.in</p>
                        </a></li>
                    </ul>
                </Col>

                <Col sm='12' className='footer-contact-2'>
                    <ul>
                        <li><a>
                            <div className='footer-head'>
                                <i class="fa-regular fa-clock footer-fa"></i>
                                <h6>Our Timing:</h6>
                            </div>
                            <p>10:00 AM to 4:00 PM (All Working Days)</p>
                        </a></li>
                        
                        <li><a>
                            <div className='footer-head'>
                                <i class="fa-solid fa-phone footer-fa"></i>
                                <h6>Contact Number: </h6>
                            </div>
                            <p>+91-9631265702</p>
                        </a></li>
                        
                        <li><a href="complaint@vmcollege.in">
                            <div className='footer-head'>
                                <i class="fa-solid fa-envelope footer-fa"></i>
                                <h6>Email Us: </h6>
                            </div>
                            <p >complaint@vmcollege.in</p>
                        </a></li>
                    </ul>
                </Col>
            </Row>
        </Container>

        <Container>
            <Row>
                <Col sm='12' className='copyright'>
                    <p>Site is technically designed, hosted and maintained by Gen Next Information Technology,Kolkata,West Bengal</p>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Footer