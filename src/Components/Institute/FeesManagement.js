import React, { useEffect, useState } from 'react'
import './FeesManagement.css'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

function FeesManagement() {
    const [ subjects, setSubjects ] = useState([])
    const [ subjects2, setSubjects2 ] = useState(subjects)
    console.log(subjects2);

    const [ openclose, setOpenclose ] = useState([])
    console.log(openclose);
    
    const [ entriesNum, setEntriesNum ] = useState(10)

    const [ pageCount, setPageCount ] = useState(1)

    const entriesNumCount = () => {
        if(entriesNum <= subjects2.length) return entriesNum
        else return subjects2.length
    }

    const [ maxAmount, setMaxAmount ] = useState(entriesNum)
    const [ minAmount, setMinAmount ] = useState(0)

    const [ page, setPage ] = useState(0)

    useEffect(() => {
        setMaxAmount((page+1)*entriesNum)
        setMinAmount(0 + entriesNum*(page))

        if(Math.ceil(subjects2.length/entriesNum) !== 0) setPageCount(Math.ceil(subjects2.length/entriesNum))
        else if(Math.ceil(subjects2.length/entriesNum) == 0) setPageCount(1)

        axios
            .get(`https://vm-college-backend-1.onrender.com/subjects`)
            .then(res => setSubjects(res.data))
            .catch(err => console.log(err))

        axios
            .get(`https://vm-college-backend-1.onrender.com/openclose`)
            .then(res => setOpenclose(res.data))
            .catch(err => console.log(err))
    })

    const entryMaxLength = () => {
        if(maxAmount <= subjects2.length) return `${maxAmount}`
        else return `${subjects2.length}`
    }

    const [ searchItem, setSearchItem ] = useState('')
    console.log(searchItem);

    useEffect(() => {
        if(searchItem == '') setSubjects2(subjects)
        if(searchItem !== '') setSubjects2([])
    })
  return (
    <Container fluid>
        <Row>
            <Col sm='12' className='dashboard-header'>
                <div className='dashboard-top'>
                    <a><i class="fa-solid fa-money-bill-wave"></i></a>
                    <h6>Fees Management</h6>
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
                                <th scope='col'>Course Name</th>
                                <th scope='col'>Gender</th>
                                <th scope='col'>Category</th>
                                <th scope='col'>Hons Subject</th>
                                <th scope='col'>Course Fees</th>
                                <th scope='col'>Fees For</th>
                                <th scope='col'>Year/Semester</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                subjects2 && subjects2.map((item, index) => {
                                    if(index>=minAmount && index<maxAmount){
                                        return(
                                            <tr key={index}>
                                                <td>{item.courseType}</td>
                                                <td></td>
                                                <td></td>
                                                <td>{item.subject}</td>
                                                <td>{item.amount}</td>
                                                <td>Admission</td>
                                                <td>{item.semester}</td>
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
                        <p>Showing {minAmount+1} to {entryMaxLength()} of {subjects2.length} items</p>
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

export default FeesManagement