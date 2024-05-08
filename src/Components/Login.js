import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Login.css'
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

  return (
    <>
        <Container className='justify-content-center login-container'>
            <Row className="justify-content-center">
                <Col sm='10' className='login-box text-center'>
                    <Row className="justify-content-center">
                        <Col sm='6' className='login-form-box login-form-box-student'>
                            <h4>Student Login</h4>

                            <form>
                                <div className='form-group'>
                                    <input type='text' className='form-control my-3 input-text' autoFocus required name='reg_no' placeholder='Enter Your Registration Number' />
                                    <i class="fa-solid fa-user errspan"></i>
                                </div>

                                <div className='form-group'>
                                    {/* <input type={passwordType} className='form-control my-3 input-text' autoFocus required name='password' placeholder='Enter your password' />
                                    <i class="fa-solid fa-lock errspan"></i>
                                    <i class={`fa-solid ${eye} view-pass`} onClick={() => viewPassword()}></i> */}
                                    <select class="form-select input-select" aria-label=".form-select-lg example" autoFocus>
                                        <option selected>Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
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
            </Row>
        </Container>
    </>
  )
}

export default Login