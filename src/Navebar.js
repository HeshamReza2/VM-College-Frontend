import React, { useEffect, useState } from 'react'
import './Navebar.css'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router'
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon,  MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse, MDBRipple, MDBBadge, MDBInput, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function Navebar() {
    const navigate = useNavigate()
    const pathname = window.location.href
    console.log(pathname)

    const [ including, setIncluding ] = useState(false)
    console.log(including)

    useEffect(() => {
        if(pathname?.includes('/institute/')) setIncluding(true)
        else setIncluding(false)
    })

    const [ showShow, setShowShow ] = useState(false)

    const toggleShow = () => setShowShow(!showShow)

    const [ topNav, setTopNav ] = useState('block')
    useEffect(() => {
        if(including) setTopNav('none')
        else setTopNav('block')
    })

  return (
    <> 
        <Container fluid style={{display: topNav}}>
            <Row>
                <Col>
                    <Navbar expand='lg' className='bg-body-tertiary'>
                        <Container fluid>
                            <Navbar.Brand onClick={() => navigate('/')}>
                                <div className='logo'>
                                    <img src='../vm_logo.png' alt='VM College' />
                                </div>
                            </Navbar.Brand>

                            <Navbar.Toggle aria-controls='basic-navbar-nav' />

                            <Navbar.Collapse collapseOnSelect>
                                <Nav className='justify-content-center'>
                                    <Nav.Item>
                                        <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                        <Nav.Link>Link1</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                        <Nav.Link>Link2</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Nav className='justify-content-end'>
                                    <Nav.Item>
                                        <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Outlet />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Navebar