import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router'
import './StudentsEdit.css'

function StudentsEdit() {
    const navigate = useNavigate()
    const location = useLocation()

    const [ data, setData ] = useState([])
    console.log(data)

    useEffect(() => {
        if(location.state == null) navigate('/login')
        else setData(location.state)
    }, [])

    const makePayment = () => {

    }

  return (
    <Container fluid>
        <Row className='justify-content-center'>
            <Col sm='12' className='intake-head'>
                <div className='intake-head-div'>
                    <h6>Application Status</h6>
                </div>
            </Col>
        </Row>

        <Row>
            {/* <Col sm='12' className='student-details-col'>
                <form className='student-details'>
                    <div className='form-group'>
                        <label for='registration_no'>Registration Number</label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='registration_no' placeholder='Enter Your Registration Number' value={data.registration_no} />
                        <i class="fa-solid fa-hashtag errspan"></i>
                    </div>
                    
                    <div className='form-group'>
                        <label for='name'>Name</label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='name' placeholder='Enter Your Name' value={data.name} />
                        <i class="fa-solid fa-user errspan"></i>
                    </div>
                    
                    <div className='form-group'>
                        <label for='father_name'>Father's Name</label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='father_name' placeholder={`Enter Your Father's Name`} value={data.father_name} />
                        <i class="fa-solid fa-user errspan"></i>
                    </div>
                    
                    <div className='form-group'>
                        <label for='course'>Program</label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='course' placeholder='Enter Your Program Name' value={data.course} />
                        <i class="fa-solid fa-laptop errspan"></i>
                    </div>
                    
                    <div className='form-group'>
                        <label for='year'>Class Name</label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='year' placeholder='Enter Your Class Name' value={data.year} />
                        <i class="fa-solid fa-users errspan"></i>
                    </div>
                    
                    <div className='form-group'>
                        <label for='dob'>DoB</label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='dob' placeholder='Enter Your DoB' value={data.dob} />
                        <i class="fa-solid fa-calendar errspan"></i>
                    </div>
                    
                    <div className='form-group'>
                        <label for='email'>Email</label>

                        <input type='email' className='form-control my-3 input-text' autoFocus required name='email' placeholder='Enter Your Email Id' value={data.email} />
                        <i class="fa-solid fa-envelope errspan"></i>
                    </div>
                    
                    <div className='form-group'>
                        <label for='mobile'>Mobile</label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='mobile' placeholder='Enter Your Mobile Number' value={data.mobile} />
                        <i class="fa-solid fa-phone errspan"></i>
                    </div>
                    
                    <div className='form-group'>
                        <label for='amount'>Amount</label>

                        <input type='text' className='form-control my-3 input-text' autoFocus required name='amount' placeholder='Amount' value={data.amount} />
                        <i class="fa-solid fa-indian-rupee-sign errspan"></i>
                    </div>
                    
                    <div className='buttons'>
                        <button className='btn btn-primary'>Proceed</button>
                    </div>
                </form>
            </Col> */}

            <Col sm='12' className='details-edit'>
                <form>
                    <Row className='details-edit-student'>
                        <Col sm='3' className='form-group-4'>
                            <label for='registration_no'>Registration Number</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus required name='registration_no' placeholder='Enter Your Registration Number' value={data.registration_no || ''} />
                            <i class="fa-solid fa-hashtag errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='name'>Name</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus required name='name' placeholder='Enter Your Name' value={data.name || ''} />
                            <i class="fa-solid fa-user errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='gender'>Gender</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus required name='gender' placeholder='Enter Your Gender' defaultValue={data.gender || ''} />
                            <i class="fa-solid fa-user errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='dob'>DoB</label>

                            <input type='date' className='form-control my-3 input-text' autoFocus required name='dob' placeholder='Enter Your DoB' value={data.dob || ''} />
                            <i class="fa-solid fa-calendar errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='country'>Nationality</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus required name='dob' placeholder='Enter Your Nationality' value={data.dob || ''} />
                            <i class="fa-solid fa-earth-americas errspan"></i>
                        </Col>
                    </Row>

                    <Row className='details-edit-student'>
                        <Col sm='3' className='form-group-4'>
                            <label for='father_name'>Father's Name</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus required name='father_name' placeholder={`Enter Your Father's Name`} value={data.father_name || ''} />
                            <i class="fa-solid fa-user errspan"></i>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='father_occupation'>Father's Occupation</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus required name='father_occupation' placeholder={`Enter Your Father's Occupation`} value={data.father_occupation || ''} />
                            <i class="fa-solid fa-business-time errspan"></i>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='mother_name'>Mother's Name</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus required name='mother_name' placeholder={`Enter Your Mother's Name`} value={data.mother_name || ''} />
                            <i class="fa-solid fa-user errspan"></i>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='mother_occupation'>Mother's Occupation</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus required name='mother_occupation' placeholder={`Enter Your Mother's Occupation`} value={data.mother_occupation || ''} />
                            <i class="fa-solid fa-business-time errspan"></i>
                        </Col>
                    </Row>

                    <Row className='details-edit-student'></Row>
                    
                    <Row>
                        <Col sm='6'>
                            <div className='buttons'>
                                <button className='btn btn-primary'>Make Payment</button>
                            </div>
                        </Col>
                    </Row>
                </form>
            </Col>
        </Row>
    </Container>
  )
}

export default StudentsEdit