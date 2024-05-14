import React, { useEffect, useState } from 'react'
import './AddManager.css'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'

function AddManager() {
    const [ managers, setManagers ] = useState([])
    const [ managers2, setManagers2 ] = useState(managers)
    console.log(managers2)
    
    const [ entriesNum, setEntriesNum ] = useState(10)

    const [ pageCount, setPageCount ] = useState(1)

    const entriesNumCount = () => {
        if(entriesNum <= managers2.length) return entriesNum
        else return managers2.length
    }

    const [ maxAmount, setMaxAmount ] = useState(entriesNum)
    const [ minAmount, setMinAmount ] = useState(0)

    const [ page, setPage ] = useState(0)

    useEffect(() => {
        setMaxAmount((page+1)*entriesNum)
        setMinAmount(0 + entriesNum*(page))

        if(Math.ceil(managers2.length/entriesNum) !== 0) setPageCount(Math.ceil(managers2.length/entriesNum))
        else if(Math.ceil(managers2.length/entriesNum) == 0) setPageCount(1)

        axios
            .get('http://localhost:8080/admin/all')
            .then(res => setManagers(res.data))
            .catch(err => console.log(err))
    })

    const [ searchItem, setSearchItem ] = useState('')
    console.log(searchItem);

    useEffect(() => {
        if(searchItem == '') setManagers2(managers)
        if(searchItem !== '') setManagers2([])
    })

    const entryMaxLength = () => {
        if(maxAmount <= managers2.length) return `${maxAmount}`
        else return `${managers2.length}`
    }

    const managerAccess = (status) => {
        if(status == false) return 'Not Permitted'
        else return 'Permitted'
    }
  return (
    <Container fluid>
        <Row>
            <Col sm='12' className='dashboard-header'>
                <div className='dashboard-top'>
                    <a><i class="fa-solid fa-user"></i></a>
                    <h6>Add Manager</h6>
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
                                <th scope='col'>Manager Name</th>
                                <th scope='col'>Manager Type</th>
                                <th scope='col'>Manager Access</th>
                                <th scope='col'>Manager Email</th>
                                <th scope='col'>Manager Mobile</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                managers2 && managers2.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td>{item.name}</td>
                                            <td>{item.type}</td>
                                            <td>{managerAccess(item.access)}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>Action</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Col>

            <Col sm='12' className='student-table'>
                <Row style={{margin: 0}} className='paginator-row'>
                    <Col sm='6' className='item-count'>
                        <p>Showing {minAmount+1} to {entryMaxLength()} of {managers2.length} items</p>
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

export default AddManager