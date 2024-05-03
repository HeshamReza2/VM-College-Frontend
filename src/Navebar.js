import React, { useEffect, useState } from 'react'
import './Navebar.css'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router'
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon,  MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse, MDBRipple, MDBBadge, MDBInput, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

function Navebar() {
    const navigate = useNavigate()
    const pathname = window.location.href
    console.log(pathname)

    const [ homeNav, setHomeNav ] = useState('nav-item-active')
    const [ capatcityNav, setCapacityNav ] = useState('')
    const [ meritNav, setMeritNav ] = useState('')
    const [ resultNav, setResultNav ] = useState('')
    const [ paymentNav, setPaymentNav ] = useState('') 

    useEffect(() => {
        if(pathname == 'http://localhost:3000/'){
            setHomeNav('nav-item-active')
            setCapacityNav('')
            setMeritNav('')
            setResultNav('')
            setPaymentNav('')
        }
        else if(pathname == 'http://localhost:3000/'){
            setHomeNav('nav-item-active')
            setCapacityNav('')
            setMeritNav('')
            setResultNav('')
            setPaymentNav('')
        }

        else if(pathname == 'http://localhost:3000/'){
            setHomeNav('nav-item-active')
            setCapacityNav('')
            setMeritNav('')
            setResultNav('')
            setPaymentNav('')
        }

        else if(pathname == 'http://localhost:3000/'){
            setHomeNav('nav-item-active')
            setCapacityNav('')
            setMeritNav('')
            setResultNav('')
            setPaymentNav('')
        }

        else if(pathname == 'http://localhost:3000/'){
            setHomeNav('nav-item-active')
            setCapacityNav('')
            setMeritNav('')
            setResultNav('')
            setPaymentNav('')
        }
    })

    const [ including, setIncluding ] = useState(false)
    console.log(including)

    useEffect(() => {
        if(pathname?.includes('/institute/')) setIncluding(true)
        else setIncluding(false)
    })

    const [ showShow, setShowShow ] = useState(false)

    const toggleShow = () => setShowShow(!showShow)

    const [ topNav, setTopNav ] = useState('block')
    const [ botNav, setBotNav ] = useState('none')
    useEffect(() => {
        if(including){
            setTopNav('none')
            setBotNav('block')
        }
        else if(!including){
            setTopNav('block')
            setBotNav('none')
        }
    })

  return (
    <> 
        <Container fluid>
            <Row>
                <Col className='p-0'>
                    <Navbar expand='lg' className='bg-body-tertiary top-navigasion' style={{display: topNav}}>
                        <Container fluid>
                            <Navbar.Toggle aria-controls='basic-navbar-nav' />

                            <Navbar.Collapse className=' justify-content-end'>
                                <Nav className='me-auto'>
                                    <Nav.Item className='high-nav-item'>
                                        <Nav.Link>Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='high-nav-item'>
                                        <Nav.Link>Terms & Condition</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className='high-nav-item'>
                                        <Nav.Link>Privacy Policy</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item className='high-nav-item'>
                                        <Nav.Link>Privacy Policy</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className='high-nav-item'>
                                        <Nav.Link>Refund Policy</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className='high-nav-item'>
                                        <Nav.Link>About Us</Nav.Link>
                                    </Nav.Item>

                                    <Nav.Item className='high-nav-item'>
                                        <Nav.Link>Contact Us</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    <Navbar expand='lg' className='bg-body-tertiary mid-navigasion' style={{display: topNav}}>
                        <Container fluid className='container-brand'>
                            <Navbar.Brand>
                                <img src='../vm_logo.png' alt='VM College Logo' />
                                <div className='logo-nav'>
                                    <h4>VM College</h4>
                                    <p>Affiliated Unit of Patliputra University</p>
                                    <p>NAAC Accredited: Grade ‘B’ (1st Cycle)</p>
                                </div>
                            </Navbar.Brand>

                            <Navbar.Brand>
                                <div className='logo-nav'>
                                    <p><i class="fa-solid fa-location-dot"></i> 4G3Q+WPW, Pavapuri, Bihar 803115</p>
                                    <p><i class="fa-solid fa-phone"></i> +91-9631265702</p>
                                    <p><i class="fa-solid fa-envelope"></i> <a href="mailto:someone@example.com">complaint@vmcollege.in</a></p>
                                </div>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>

                    <Navbar expand='lg' className='bg-body-tertiary navigasion' style={{display: topNav}}>
                        <Container>
                            
                            <Navbar.Toggle aria-controls='basic-navbar-nav' />

                            <Navbar.Collapse collapseOnSelect className='justify-content-between'>
                                <Nav className='me-auto'>
                                    <Nav.Item>
                                        <Nav.Link className={homeNav} onClick={() => navigate('/')}>Home</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                        <Nav.Link className={capatcityNav} onClick={() => navigate('/')}>Intake Capacity</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                        <Nav.Link className={meritNav} onClick={() => navigate('/')}>Merit List</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                        <Nav.Link className={resultNav} onClick={() => navigate('/')}>Know Your Result</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                        <Nav.Link className={paymentNav} onClick={() => navigate('/')}>View Payment Status</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Nav className='me-auto justify-content-end'>
                                    <Nav.Item>
                                        <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    {/* <Navbar expand='lg' className='bg-body-tertiary' style={{display: botNav}}></Navbar> */}

                    <Outlet />
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Navebar