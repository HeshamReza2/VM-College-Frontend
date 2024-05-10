import React, { useEffect } from 'react'
import './InstituteDashboard.css'
import { Col, Container, Row } from 'react-bootstrap'
import CanvasJSReact from '@canvasjs/react-charts'
import { useNavigate } from 'react-router'
import Cookies from 'universal-cookie'


const cookies = new Cookies()

function InstituteDashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    if(!cookies.get('username')){
      navigate('/')
    }
    
    else if(!cookies.get('password')){
      navigate('/')
    }
  })
  const studentsData = [
    { name: 'Admitted Students', students: 924},
    { name: 'Total Students', students: 1126}
  ]

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: 'Student Admission Data'
    },
    data: [{
      type: 'pie',
      startAngle: 0,
      toolTipContent: '<b>{label}</b>: {y}',
      showInLegend: 'true',
      legendTable: '{label}',
      indexLabelFontSize: 16,
      indexLabel: '{label} - {y}',
      dataPoints: [
        { y: studentsData[0].students, label: studentsData[0].name },
        { y: studentsData[1].students - studentsData[0].students, label: 'Non Admitted Students' }
      ]
    }]
  }

  return (
    <Container fluid className='main-dashboard-container'>
      <Row>
        <Col sm='12' className='dashboard-header'>
          <div className='dashboard-top'>
            <a><i class="fa-solid fa-gauge"></i></a>
            <h6>Dashboard</h6>
          </div>

          <div className='dashboard-bottom'>
            <p>Powered By: Gen Next Information Technology </p>

            <p>Email to: <a href='mailto:developer@gnextit.com'>developer@gnextit.com</a> / <a href='mailto:info@gnextit.com'>info@gnextit.com</a> / <a href='mailto:conplaint@gnextit.com'>conplaint@gnextit.com</a></p>

            <p>Talk to: 8017010592 / 9734103591</p>
          </div>
        </Col>

        <Col sm='12' className='student-number'>
          <Row>
            <Col sm='6' className='student-number-box'>
              <div className='student-number-box-inner'>
                <a><i class="fa-solid fa-user-check"></i></a>
                <div className='student-number-box-text'>
                  <h6>Admitted Student</h6>
                  <p>924</p>
                </div>
              </div>
            </Col>
            
            <Col sm='6' className='student-number-box'>
              <div className='student-number-box-inner'>
                <a><i class="fa-solid fa-circle-user"></i></a>
                <div className='student-number-box-text'>
                  <h6>Total Student</h6>
                  <p>1226</p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col sm='12' className='pieChart'>
          <Col sm='6'>
            {/* <CanvasJSReact options={options} /> */}
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default InstituteDashboard