import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './AdmittedStudents.css'
import Popup from 'reactjs-popup'
import axios from 'axios'

function AdmittedStudents() {
    const [ entriesNum, setEntriesNum ] = useState(10)

    const [ subjects, setSubjects ] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8080/subjects')
            .then((res) => setSubjects(res.data))
            .catch(err => console.log(err))
    })
    
    const [ studentsList, setStudentsList ] = useState([])
    console.log(studentsList)

    useEffect(() => {
        axios
            .post('http://localhost:8080/find-student', { field: 'admission_status', value: 'true' })
            .then((res) => setStudentsList(res.data))
            .catch(err => console.log(err))
    })

    const entriesNumCount = () => {
        if(entriesNum <= studentsList.length) return entriesNum
        else return studentsList.length
    }

    const [ matches, setMatches ] = useState(window.matchMedia('(max-width: 425px)').matches)

    const popupStyle = () => {
        if(matches == true) return {'width': '100%'}
        else if(matches == false) return {'width': '500px'}
    }

    useEffect(() => {
        window
            .matchMedia('(max-width: 425px)')
            .addEventListener('change', e => setMatches( e.matches ))
    })

    const [ studentData, setStudentData ] = useState({
        name: '',
        father_name: '',
        mobile: '',
        email: '',
        session: '',
        course: '',
        year: '',
        gender: '',
        category: '',
        amount: ''
    })

    const updateStudentData = e => {
        setStudentData({
            ...studentData,
            [e.target.name]: e.target.value
        })
    }

    const [ exists, setExists ] = useState(false)

    useEffect(() => {
        if(studentData.name !== '' & studentData.mobile !== ''){
            axios
                .post('http://localhost:8080/check-student', { name: studentData.name, mobile: studentData.mobile })
                .then(res => {
                    if(res) setExists(true)
                    else setExists(false)
                })
                .catch(err => console.log(err))
        }
    })

    const addStudent = (e, close) => {
        e.preventDefault()
        axios
            .post('http://localhost:8080/add-student', studentData)
            .then(() => {
                alert('Student Added')
                close()
            })
            .catch(err => console.log(err))
    }

  return (
    <Container fluid>
        <Row>
            <Col sm='12' className='dashboard-header'>
                <div className='dashboard-top'>
                    <a><i class="fa-solid fa-user-check"></i></a>
                    <h6>Admitted Student</h6>
                </div>

                <div className='dashboard-bottom'>
                    <p>Powered By: Gen Next Information Technology </p>

                    <p>Email to: <a href='mailto:developer@gnextit.com'>developer@gnextit.com</a> / <a href='mailto:info@gnextit.com'>info@gnextit.com</a> / <a href='mailto:conplaint@gnextit.com'>conplaint@gnextit.com</a></p>

                    <p>Talk to: 8017010592 / 9734103591</p>
                </div>
            </Col>

            <Col sm='12' className='add-payment'>
                <div className='buttoned'>
                    <Popup trigger={<button><i class="fa-solid fa-plus"></i> Add Student</button>} modal nested contentStyle={popupStyle()}>
                        {
                            close => (
                                <Container className='add-popup'>
                                    <Row>
                                        <Col sm='12' className='d-flex justify-content-end'>
                                            <button className='close-btn' onClick={() => close()}><i class="fa-solid fa-xmark"></i></button>
                                        </Col>

                                        <Col sm='12' className='add-data-from'>
                                            <h4>Add Student</h4>

                                            <form>
                                                <div className='form-group-6'>
                                                    <input type='text' className='form-control my-3 form-group-6-input' autoFocus required name='name' placeholder={`Student's Full Name`} onChange={updateStudentData} />
                                                    <i class="fa-solid fa-user icon-align"></i>
                                                </div>

                                                
                                                <div className='form-group-6'>
                                                    <input type='text' className='form-control my-3 form-group-6-input' autoFocus required name='father_name' placeholder={`Student's Father's Name`} onChange={updateStudentData} />
                                                    <i class="fa-solid fa-user icon-align"></i>
                                                </div>
                                                
                                                <div className='form-group-6'>
                                                    <input type='number' className='form-control my-3 form-group-6-input' autoFocus required name='mobile' placeholder={`Mobile No`} onChange={updateStudentData} />
                                                    <i class="fa-solid fa-envelope icon-align"></i>
                                                </div>
                                                
                                                <div className='form-group-6'>
                                                    <input type='email' className='form-control my-3 form-group-6-input' autoFocus required name='email' placeholder={`Email Id`} onChange={updateStudentData} />
                                                    <i class="fa-solid fa-phone icon-align"></i>
                                                </div>
                                                
                                                <div className='form-group-6 form-group-6-options'>
                                                    <select class="form-select form-group-6-select" aria-label=".form-select-lg example" autoFocus name='session' onChange={updateStudentData} >
                                                        <option selected hidden value='2024-2028'>Select Student's Session</option>
                                                        <option value='2024-2028'>2024-2028</option>
                                                    </select>
                                                </div>
                                                
                                                <div className='form-group-6 form-group-6-options'>
                                                    <select class="form-select form-group-6-select" aria-label=".form-select-lg example" autoFocus name='course' onChange={updateStudentData} >
                                                        <option selected hidden value=''>Select Student's Course</option>
                                                        {
                                                            subjects && subjects.map((item, index) => {
                                                                return(
                                                                    <option value={item.subject}>{item.subject}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                
                                                <div className='form-group-6 form-group-6-options'>
                                                    <select class="form-select form-group-6-select" aria-label=".form-select-lg example" autoFocus name='year' onChange={updateStudentData} >
                                                        <option selected hidden value='2024-2028'>Select Student's Year/Semester</option>
                                                        <option value='1st Semester'>1st Semester</option>
                                                        <option value='2nd Semester'>2nd Semester</option>
                                                        <option value='3rd Semester'>3rd Semester</option>
                                                        <option value='4th Semester'>4th Semester</option>
                                                    </select>
                                                </div>

                                                <div className='form-group-6 form-group-6-options'>
                                                    <select class="form-select form-group-6-select" aria-label=".form-select-lg example" autoFocus name='gender' onChange={updateStudentData} >
                                                        <option selected hidden value='2024-2028'>Select Student's Gender</option>
                                                        <option value='Male'>Male</option>
                                                        <option value='Female'>Female</option>
                                                        <option value='Others'>Others</option>
                                                    </select>
                                                </div>

                                                <div className='form-group-6 form-group-6-options'>
                                                    <select class="form-select form-group-6-select" aria-label=".form-select-lg example" autoFocus name='category' onChange={updateStudentData} >
                                                        <option selected hidden value='2024-2028'>Select Student's Category</option>
                                                        <option value='General'>General</option>
                                                        <option value='OBC-A'>OBC-A</option>
                                                        <option value='OBC-B'>OBC-B</option>
                                                        <option value='SC'>SC</option>
                                                        <option value='ST'>ST</option>
                                                    </select>
                                                </div>
                                                
                                                <div className='form-group-6'>
                                                    <input type='number' className='form-control my-3 form-group-6-input' autoFocus required name='amount' placeholder={`Student's Fees Amount`} onChange={updateStudentData} />
                                                    <i class="fa-solid fa-indian-rupee-sign icon-align"></i>
                                                </div>

                                                <div className='buttoned-2'>
                                                    <button className='btn' onClick={e => {
                                                        e.preventDefault()
                                                        axios
                                                            .post('http://localhost:8080/add-student', studentData)
                                                            .then(() => {
                                                                alert('Student Added')
                                                                close()
                                                            })
                                                            .catch(err => console.log(err))
                                                            close()
                                                    }}>Add</button>
                                                    <button className='btn' onClick={e => {e.preventDefault();close();}}>Exit</button>
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        }
                    </Popup>
                    {/* <button><i class="fa-regular fa-pen-to-square"></i> Update payment</button> */}
                </div>
            </Col>

            <Col sm='12' className='dashboard-select-entry'>
                <div className='selector'>
                    <div className='entries-box'>
                        <p>Show</p>
                        <select id='entries' name='entries' onChange={(e) => setEntriesNum(e.target.value)}>
                            <option value='10'>10</option>
                            <option value='25'>25</option>
                            <option value='50'>50</option>
                            <option value='100'>100</option>
                        </select>
                        <p>entries</p>
                    </div>

                    <div className='searching'>
                        <input type='text' placeholder='Search...' />
                        <button>Search</button>
                    </div>
                </div>
            </Col>

            <Col sm='12' className='student-table'>
                <div className='table-responsive-xl'>
                    <table className='table student-table-table'>
                        <thead>
                            <tr>
                                <th scope='col'>Pay ID</th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Registration No</th>
                                <th scope='col'>Course</th>
                                <th scope='col'>Year/Semester</th>
                                <th scope='col'>Roll No</th>
                                <th scope='col'>Amount</th>
                                <th scope='col'>Mobile</th>
                                <th scope='col'>Transaction Id</th>
                                <th scope='col'>Date</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                studentsList && studentsList.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <th scope='row'>{index+1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.registration_no}</td>
                                            <td>{item.course}</td>
                                            <td>{item.year}</td>
                                            <td>{item.roll}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.transaction_id}</td>
                                            <td>{item.date}</td>
                                            <td>Action</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default AdmittedStudents