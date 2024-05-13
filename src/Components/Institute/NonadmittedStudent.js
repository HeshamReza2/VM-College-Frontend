import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './NonadmittedStudent.css'
import axios from 'axios'
import ReactPaginate from 'react-paginate'

function NonadmittedStudent() {
    const [ studentsList2, setStudentsList2 ] = useState([])

    const [ pageCount, setPageCount ] = useState(Math.ceil(studentsList2.length/10))
    console.log(pageCount)
    
    const [ entriesNum, setEntriesNum ] = useState(10)

    const entriesNumCount = () => {
        if(entriesNum <= studentsList2.length) return entriesNum
        else return studentsList2.length
    }

    const [ maxAmount, setMaxAmount ] = useState(entriesNum)
    const [ minAmount, setMinAmount ] = useState(0)

    const [ page, setPage ] = useState(1)

    useEffect(() => {
        setMaxAmount(page*entriesNum)
        setMinAmount(0 + entriesNum*(page-1))

        setPageCount(Math.ceil(studentsList2.length/10))

        axios
            .post('http://localhost:8080/find-student', { field: 'admission_status', value: 'false' })
            .then((res) => setStudentsList2(res.data))
            .catch(err => console.log(err))
    })

    const handleChange = (e, number) => {
        setPage(number)
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
                                    if(index>=minAmount && index<maxAmount){
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
                                    }
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Col>

            <Col sm='12' className='student-table'>
                <Row>
                    <Col sm='6'>
                        <p>Showing 0 to 0 of 0 items</p>
                    </Col>

                    <Col sm='6'>
                        {/* <div className='entry-buttons'>
                            <button className='entry-buttons-text'>Previous</button>
                            <button className='entry-buttons-numbers'>1</button>
                            <button className='entry-buttons-numbers'>2</button>
                            <button className='entry-buttons-numbers'>3</button>
                            <button className='entry-buttons-numbers'>4</button>
                            <button className='entry-buttons-numbers'>5</button>
                            <button className='entry-buttons-numbers'>6</button>
                            <button className='entry-buttons-numbers'>7</button>
                            <button className='entry-buttons-text'>Previous</button>
                        </div> */}

                        <ReactPaginate breakLabel='...' nextLabel='next <i class="fa-solid fa-forward-step"></i>' onPageChange={e => setPage(e.selected)} pageRangeDisplayed={3} pageCount={pageCount} previousLabel='<i class="fa-solid fa-backward-step"></i> previous' renderOnZeroPageCount={null} />

                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default NonadmittedStudent