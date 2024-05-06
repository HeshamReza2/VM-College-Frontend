import React, { useState } from 'react'
import './IntakeCapacity.css'
import { Col, Container, Row } from 'react-bootstrap'

function IntakeCapacity() {
  const [ entriesNum, setEntriesNum ] = useState(10)
  console.log(entriesNum)

  const [ entryData, setEntryData ] = useState([
    {program: 'UG', subject: 'Bengali', capacity: '25'},
    {program: 'UG', subject: 'English', capacity: '25'},
    {program: 'UG', subject: 'Hindi', capacity: '25'},
    {program: 'UG', subject: 'Mathematics', capacity: '25'},
    {program: 'UG', subject: 'Physics', capacity: '25'},
    {program: 'UG', subject: 'Chemistry', capacity: '25'},
    {program: 'UG', subject: 'Botany', capacity: '25'},
    {program: 'UG', subject: 'Zoology', capacity: '25'},
    {program: 'UG', subject: 'History', capacity: '25'},
    {program: 'UG', subject: 'Geography', capacity: '25'},
    {program: 'PG', subject: 'Bengali', capacity: '25'},
    {program: 'PG', subject: 'English', capacity: '25'},
    {program: 'PG', subject: 'Hindi', capacity: '25'},
    {program: 'PG', subject: 'Mathematics', capacity: '25'},
    {program: 'PG', subject: 'Physics', capacity: '25'},
    {program: 'PG', subject: 'Chemistry', capacity: '25'},
    {program: 'PG', subject: 'Botany', capacity: '25'},
    {program: 'PG', subject: 'Zoology', capacity: '25'},
    {program: 'PG', subject: 'History', capacity: '25'},
    {program: 'PG', subject: 'Geography', capacity: '25'}
  ])

  const entriesNumCount = () => {
    if(entriesNum <= entryData.length) return entriesNum
    else return entryData.length
  }

  return (
    <Container fluid>
        <Row>
          <Col sm='12' className='intake-head'>
            <div className='intake-head-div'>
              <h6>Intake Capacity</h6>
            </div>
          </Col>

          <Col sm='12'>
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

          <Col sm='12'>
            <div className='table-content table-responsive-sm'>
              <table className='table'>
                <thead>
                  <tr>
                    <th scope='col'>Sr No</th>
                    <th scope='col'>Program Name</th>
                    <th scope='col'>Subject Name</th>
                    <th scope='col'>Intake Capacity</th>
                  </tr>
                </thead>

                <tbody>
                  {entryData && entryData.map((item, index) => {
                    if(index<entriesNum){
                      return(
                        <tr key={index}>
                          <th scope='col'>{index+1}</th>
                          <td>{item.program}</td>
                          <td>{item.subject}</td>
                          <td>{item.capacity}</td>
                        </tr>
                      )
                    }
                  })}
                  
                </tbody>
              </table>
            </div>
          </Col>

          <Col sm='12'>
            <div className='entry-num'>
              <p>Showing {entriesNumCount()} of {entryData.length} entries</p>
              <div className='arrows'>
                <a>Previous</a>
                <a>Next</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  )
}

export default IntakeCapacity