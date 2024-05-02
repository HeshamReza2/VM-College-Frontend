import React, { useEffect, useState } from 'react'
import './Login.css'
import { Col, Container, Row } from 'react-bootstrap'
function Login() {
    const [ eye, setEye ] = useState('fa-eye')
    const [ passwordType, setPasswordType ] = useState('password')

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

    const [ activeSwitch1, setActiveSwitch1 ] = useState('active-switch')
    const [ activeSwitch2, setActiveSwitch2 ] = useState('')

    const [ logPage, setLogPage ] = useState('student')

    const [ studentDisplay, setStudentDisplay ] = useState('block')
    const [ instituteDisplay, setInstituteDisplay ] = useState('none')

    useEffect(() => {
        if(logPage == 'student'){
            setStudentDisplay('block')
            setInstituteDisplay('none')
            setActiveSwitch1('active-switch')
            setActiveSwitch2('')
        }

        else if(logPage == 'institute'){
            setStudentDisplay('none')
            setInstituteDisplay('block')
            setActiveSwitch1('')
            setActiveSwitch2('active-switch')
        }
    })

  return (
    <>
        <Container className='justify-content-center'>
            <Row className="justify-content-center">
                <Col sm='10' className='login-box text-center' style={{display: studentDisplay}}>
                    <Row className="justify-content-center">
                        <Col sm='6' className='login-form-box login-form-box-student'>
                            <h4>Student Login</h4>

                            <form>
                                <div className='form-group'>
                                    <input type='text' className='form-control my-3 input-text' autoFocus required name='username' placeholder='Enter your username' />
                                    <i class="fa-solid fa-user errspan"></i>
                                </div>

                                <div className='form-group'>
                                    <input type={passwordType} className='form-control my-3 input-text' autoFocus required name='password' placeholder='Enter your password' />
                                    <i class="fa-solid fa-lock errspan"></i>
                                    <i class={`fa-solid ${eye} view-pass`} onClick={() => viewPassword()}></i>
                                </div>

                                <div className='buttons'>
                                    <button className='btn btn-primary'>Log In</button>
                                </div>
                            </form>
                        </Col>

                        <Col sm='6' className='login-img-box-student'>
                            <img src='../images/student.jpg' alt='Student Vector Art' />
                        </Col>
                    </Row>
                </Col>

                <Col sm='10' className='login-box text-center' style={{display: instituteDisplay}}>
                    <Row className="justify-content-center">
                        <Col sm='6' className='login-img-box'>
                            <img src='../images/office.jpg' alt='Office Vector Art' />
                        </Col>

                        <Col sm='6' className='login-form-box'>
                            <h4>Institute Login</h4>

                            <form>
                                <div className='form-group'>
                                    <input type='text' className='form-control my-3 input-text' autoFocus required name='username' placeholder='Enter your username' />
                                    <i class="fa-solid fa-user errspan"></i>
                                </div>

                                <div className='form-group'>
                                    <input type={passwordType} className='form-control my-3 input-text' autoFocus required name='password' placeholder='Enter your password' />
                                    <i class="fa-solid fa-lock errspan"></i>
                                    <i class={`fa-solid ${eye} view-pass`} onClick={() => viewPassword()}></i>
                                </div>

                                <div className='buttons'>
                                    <button className='btn btn-primary'>Log In</button>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Col>

                <Col sm='10' className='switch-login text-center'>
                    <Row className="justify-content-center">
                        <Col sm='5' className={`switch-login-box ${activeSwitch1}`}>
                            <button onClick={() => setLogPage('student')}>Student Log In</button>
                        </Col>
                        <Col sm='5' className={`switch-login-box ${activeSwitch2}`}>
                            <button onClick={() => setLogPage('institute')}>Institute Log In</button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Login