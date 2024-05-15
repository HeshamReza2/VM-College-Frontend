import React, { useEffect, useState } from 'react'
import './ManageStudent.css'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'

function ManageStudent() {
    const [ studentsList, setStudentsList ] = useState([])
    const [ studentsList3, setStudentsList3 ] = useState(studentsList)
    console.log(studentsList3);
    
    const [ entriesNum, setEntriesNum ] = useState(10)

    const [ pageCount, setPageCount ] = useState(1)

    const entriesNumCount = () => {
        if(entriesNum <= studentsList3.length) return entriesNum
        else return studentsList3.length
    }

    const [ maxAmount, setMaxAmount ] = useState(entriesNum)
    const [ minAmount, setMinAmount ] = useState(0)

    const [ page, setPage ] = useState(0)

    useEffect(() => {
        setMaxAmount((page+1)*entriesNum)
        setMinAmount(0 + entriesNum*(page))

        if(Math.ceil(studentsList3.length/entriesNum) !== 0) setPageCount(Math.ceil(studentsList3.length/entriesNum))
            else if(Math.ceil(studentsList3.length/entriesNum) == 0) setPageCount(1)

        axios
            .get(`https://vm-college-backend-1.onrender.com/students`)
            .then(res => setStudentsList(res.data))
            .catch(err => console.log(err))
    }, [page, entriesNum, studentsList, studentsList3])

    const admissionStatus = (status) => {
        if(status == false) return 'Payment Not Done'
        else return 'Payment Done'
    }

    const entryMaxLength = () => {
        if(maxAmount <= studentsList3.length) return `${maxAmount}`
        else return `${studentsList3.length}`
    }

    const [ searchItem, setSearchItem ] = useState('')
    console.log(searchItem);

    useEffect(() => {
        if(searchItem == '') setStudentsList3(studentsList)
        if(searchItem !== '') setStudentsList3([])
    }, [searchItem, studentsList])
  return (
    <Container fluid>
        <Row>
            <Col sm='12' className='dashboard-header'>
                <div className='dashboard-top'>
                    <a><i class="fa-solid fa-graduation-cap"></i></a>
                    <h6>Manage Student</h6>
                </div>

                <div className='dashboard-bottom'>
                    <p>Powered By: Gen Next Information Technology </p>

                    <p>Email to: <a href='mailto:developer@gnextit.com'>developer@gnextit.com</a> / <a href='mailto:info@gnextit.com'>info@gnextit.com</a> / <a href='mailto:conplaint@gnextit.com'>conplaint@gnextit.com</a></p>

                    <p>Talk to: 8017010592 / 9734103591</p>
                </div>
            </Col>

            <Col sm='12' className='dashboard-select-entry'>
                <div className='selector'>
                    <div className='entries-box'>
                        <p>Show</p>
                        <select id='entries' name='entries' onChange={(e) => {setEntriesNum(e.target.value); setPage(0)}}>
                            <option value='10'>10</option>
                            <option value='25'>25</option>
                            <option value='50'>50</option>
                            <option value='100'>100</option>
                        </select>
                        <p>entries</p>
                    </div>

                    <div className='searching'>
                        <input type='text' placeholder='Search...' onChange={e => setSearchItem(e.target.value)} />
                        <button>Search</button>
                    </div>
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
                                <th scope='col'>Admission Status</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                studentsList3 && studentsList3.map((item, index) => {
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
                                                <td>{admissionStatus(item.admission_status)}</td>
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
                <Row style={{margin: 0}} className='paginator-row'>
                    <Col sm='6' className='item-count'>
                        <p>Showing {minAmount+1} to {entryMaxLength()} of {studentsList3.length} items</p>
                    </Col>

                    <Col sm='6' className='paginator'>
                        <ReactPaginate activeClassName={'item active '} breakClassName={'item break-me '} breakLabel={'...'} containerClassName={'pagination'} disabledClassName={'disabled-page'} marginPagesDisplayed={2} nextClassName={'item next '} nextLabel={<ArrowForwardIos style={{ fontSize: 18}} />} onPageChange={e => setPage(e.selected)} pageCount={pageCount} pageClassName={'item pagination-page '} pageRangeDisplayed={2} previousClassName={'item previous'} previousLabel={<ArrowBackIos style={{ fontSize: 18}} />} />

                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default ManageStudent