import React, { useEffect, useState } from 'react'
import './AddManager.css'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'

function AddManager() {
    const [ managers, setManagers ] = useState([])
    console.log(managers)

    useEffect(() => {
        axios
            .get('http://localhost:8080/admin/all')
            .then(res => setManagers(res.data))
            .catch(err => console.log(err))
    })

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
                                managers && managers.map((item, index) => {
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
        </Row>
    </Container>
  )
}

export default AddManager