import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './NonadmittedStudent.css'
import axios from 'axios'

function NonadmittedStudent() {
    const [ studentsList2, setStudentsList2 ] = useState([])
    console.log(studentsList2)

    useEffect(() => {
        axios
            .post('http://localhost:8080/find-student', { field: 'admission_status', value: 'false' })
            .then((res) => setStudentsList2(res.data))
            .catch(err => console.log(err))
    })
    
    const [ entriesNum, setEntriesNum ] = useState(10)

    const entriesNumCount = () => {
        if(entriesNum <= studentsList2.length) return entriesNum
        else return studentsList2.length
    }
  return (
    <Container fluid>
        <Row>
            <Col sm='12' className='dashboard-header'>
                <div className='dashboard-top'>
                    <a><i class="fa-solid fa-user-xmark"></i></a>
                    <h6>Non-Admitted Student</h6>
                </div>

                <div className='dashboard-bottom'>
                    <p>Powered By: Gen Next Information Technology </p>

                    <p>Email to: <a href='mailto:developer@gnextit.com'>developer@gnextit.com</a> / <a href='mailto:info@gnextit.com'>info@gnextit.com</a> / <a href='mailto:conplaint@gnextit.com'>conplaint@gnextit.com</a></p>

                    <p>Talk to: 8017010592 / 9734103591</p>
                </div>
            </Col>

            <Col sm='12' className='student-table'>
                <div className='table-responsive-xl'>
                    <table className='table student-table-table'>
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Father Name</th>
                                <th scope='col'>Registration No</th>
                                <th scope='col'>Course</th>
                                <th scope='col'>Year/Semester</th>
                                <th scope='col'>Roll No</th>
                                <th scope='col'>Mobile</th>
                                <th scope='col'>Amount</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                studentsList2 && studentsList2.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.father_name}</td>
                                            <td>{item.registration_no}</td>
                                            <td>{item.course}</td>
                                            <td>{item.year}</td>
                                            <td>{item.roll}</td>
                                            <td>{item.mobile}</td>
                                            <td>{item.amount}</td>
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

export default NonadmittedStudent