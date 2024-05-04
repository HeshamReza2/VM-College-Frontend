import React, { useEffect, useState } from 'react'
import './Navebar.css'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router'
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBIcon,  MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCollapse, MDBRipple, MDBBadge, MDBInput, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import Footer from './Footer';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Login from './Components/Login'

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
        else if(pathname == 'http://localhost:3000/intake-capacity'){
            setHomeNav('')
            setCapacityNav('nav-item-active')
            setMeritNav('')
            setResultNav('')
            setPaymentNav('')
        }

        else if(pathname == 'http://localhost:3000/merit-list'){
            setHomeNav('')
            setCapacityNav('')
            setMeritNav('nav-item-active')
            setResultNav('')
            setPaymentNav('')
        }

        else if(pathname == 'http://localhost:3000/know-your-result'){
            setHomeNav('')
            setCapacityNav('')
            setMeritNav('')
            setResultNav('nav-item-active')
            setPaymentNav('')
        }

        else if(pathname == 'http://localhost:3000/view-payment-status'){
            setHomeNav('')
            setCapacityNav('')
            setMeritNav('')
            setResultNav('')
            setPaymentNav('nav-item-active')
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

    const [ passwordType, setPasswordType ] = useState('password')
    const [ eye, setEye ] = useState('fa-eye')
    
    const viewPassword = () => {
        if(eye == 'fa-eye'){
            setEye('fa-eye-slash');
            setPasswordType('text');
        }
        else if(eye == 'fa-eye-slash'){
            setEye('fa-eye');
            setPasswordType('password');
        }
    }

    const [ studentDisplay, setStudentDisplay ] = useState('block')
    const [ instituteDisplay, setInstituteDisplay ] = useState('none')

    useEffect(() => {
        if(studentDisplay == 'none'){
            setInstituteDisplay('block')
        }
        else if(studentDisplay == 'block'){
            setInstituteDisplay('none')
        }
    })

    const [ matches, setMatches ] = useState(window.matchMedia('(max-width: 425px)').matches)
    console.log(matches);

    const popupStyle = () => {
        if(matches == true) return {'width': '100%'}
        else if(matches == false) return {'width': '500px'}
    }

    useEffect(() => {
        window
            .matchMedia('(max-width: 425px)')
            .addEventListener('change', e => setMatches( e.matches ))
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
                                        <Nav.Link className={capatcityNav} onClick={() => navigate('/intake-capacity')}>Intake Capacity</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                        <Nav.Link className={meritNav} onClick={() => navigate('/merit-list')}>Merit List</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                        <Nav.Link className={resultNav} onClick={() => navigate('/know-your-result')}>Know Your Result</Nav.Link>
                                    </Nav.Item>
                                    
                                    <Nav.Item>
                                        <Nav.Link className={paymentNav} onClick={() => navigate('/view-payment-status')}>View Payment Status</Nav.Link>
                                    </Nav.Item>
                                </Nav>

                                <Nav className='me-auto justify-content-end'>
                                    <Nav.Item>
                                        {/* <Nav.Link onClick={() => navigate('/login')}>Login</Nav.Link> */}

                                        <Popup trigger={<button className='log-btn'>Log In</button>} modal nested contentStyle={popupStyle()}>
                                            {
                                                close => (
                                                    <>
                                                        <Container className='log-container'>
                                                            <Row className='log-row'>
                                                                <Col sm='12' className='d-flex justify-content-end'>
                                                                    <button className='close-btn' onClick={() => close()}><i class="fa-solid fa-xmark"></i></button>
                                                                </Col>

                                                                <Col sm='12' className='login-box student' style={{display: studentDisplay}}>
                                                                    <h4>Student Login</h4>

                                                                    <form>
                                                                        <div className='form-group'>
                                                                            <input type='text' className='form-control my-3 input-text' autoFocus required name='username' placeholder='Enter your username' />
                                                                            <i class="fa-solid fa-user icon-align"></i>
                                                                        </div>
                                                                        
                                                                        <div className='form-group'>
                                                                            <input type={passwordType} className='form-control my-3 input-text' autoFocus required name='username' placeholder='Enter your username' />
                                                                            <i class="fa-solid fa-user icon-align"></i>
                                                                            <i class={`fa-solid ${eye} view-pass`} onClick={() => viewPassword()}></i>
                                                                        </div>

                                                                        <div className='buttons'>
                                                                            <button className='btn btn-log'>Log In</button>
                                                                        </div>
                                                                    </form>

                                                                    <a><p>Forgot Password?</p></a>
                                                                    <a onClick={() => { setStudentDisplay('none')}}><p>Institute Log In</p></a>
                                                                </Col>

                                                                <Col sm='12' className='login-box institute' style={{display: instituteDisplay}}>
                                                                    <h4>Institute Login</h4>

                                                                    <form>
                                                                        <div className='form-group'>
                                                                            <input type='text' className='form-control my-3 input-text' autoFocus required name='username' placeholder='Enter your username' />
                                                                            <i class="fa-solid fa-user icon-align"></i>
                                                                        </div>
                                                                        
                                                                        <div className='form-group'>
                                                                            <input type={passwordType} className='form-control my-3 input-text' autoFocus required name='username' placeholder='Enter your username' />
                                                                            <i class="fa-solid fa-user icon-align"></i>
                                                                            <i class={`fa-solid ${eye} view-pass`} onClick={() => viewPassword()}></i>
                                                                        </div>

                                                                        <div className='buttons'>
                                                                            <button className='btn btn-log'>Log In</button>
                                                                        </div>
                                                                    </form>

                                                                    <a><p>Forgot Password?</p></a>
                                                                    <a onClick={() => { setStudentDisplay('block')}}><p>Student Log In</p></a>
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </>
                                                )
                                            }
                                        </Popup>
                                    </Nav.Item>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>

                    {/* <Navbar expand='lg' className='bg-body-tertiary' style={{display: botNav}}></Navbar> */}
                </Col>
            </Row>
        </Container>

        <Outlet />

        <Footer />
    </>
  )
}

export default Navebar