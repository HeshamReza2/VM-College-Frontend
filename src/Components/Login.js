import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router'

function Login() {
    const navigate = useNavigate()
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

    const [ data, setData ] = useState({
        registration_no: '',
        course: ''
    })

    console.log(data)

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const [ subjects, setSubjects ] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8080/subjects')
            .then(res => setSubjects(res.data))
            .catch(err => console.log(err))
    }, [])

    const [ res, setRes ] = useState([])

    useEffect(() => {
        axios
            .post('http://localhost:8080/single-student', data)
            .then(res => setRes(res.data[0]))
            .catch(err => console.log(err))
    })

    const checkStudent = () => {
        if(data.registration_no == '' || data.course == ''){
            alert('Please Enter Your Details Properly')
        }
        else{
            if(res == [] || res == undefined){
                alert('Please Enter Your Details Properly')
            }
            else if(res != [] || res !== undefined){
                navigate('/student-details', { state: res })
            }
        }
    }

  return (
    <>
        <Container fluid className='justify-content-center login-container'>
            <Row className="justify-content-center login-row">
                <Col sm='6' className='login-box2 text-center'>
                    <form className='login-form2' onSubmit={checkStudent}>
                        <div className='form-group'>
                            <input type='text' className='form-control my-3 input-text' autoFocus required name='registration_no' placeholder='Enter Your Registration Number' onChange={updateData} />
                            <i class="fa-solid fa-user errspan"></i>
                        </div>

                        <div className='form-group'>
                            <select class="form-select input-select" aria-label=".form-select-lg example" autoFocus name='course' onChange={updateData} >
                                <option selected hidden value=''>Select Your Course</option>
                                {subjects && subjects.map((item, index) => {
                                    return(
                                        <option key={index} value={item.subject}>{item.subject}</option>
                                    )
                                })}
                            </select>
                        </div>

                        <div className='buttons'>
                            <button className='btn btn-primary'>Search</button>
                        </div>
                    </form>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Login