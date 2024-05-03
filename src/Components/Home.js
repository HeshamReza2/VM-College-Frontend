import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Home.css'

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col className='announce'>
          <div className='announce-bar'>
            <h5>Announcements</h5>
            <i class="fa-solid fa-bullhorn"></i>
          </div>
          <marquee>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</marquee>
        </Col>
      </Row>

      <Container fluid className='container-main'>
        <Row className='text-center'>
          <Col sm='8'>
            <Row className='justify-content-center'>
              <Col sm='5' className='equal-height-column  m-1'>
                <Row className='admission-box'>
                  <i class="fa-solid fa-graduation-cap"></i>
                  <h6>Online Admission 2024 For UG</h6>
                  <p><a>Online Admission 2023-27 for UG-2nd Semester</a></p>
                </Row>

                <Row className='admission-box-content justify-content-center'>
                  <h6>Admission Schedule For Under Graduate</h6>

                  <table className='table'>
                    <thead>
                      <tr>
                        <th scope='col'>Sr No</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Date/ Timelines</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <th scope='row'>1</th>
                        <td>Hesham Reza</td>
                        <td>03-05-2024</td>
                      </tr>
                    </tbody>
                  </table>
                </Row>
              </Col>
              
              <Col sm='5' className='equal-height-column  m-1'>
                <Row className='admission-box'>
                  <i class="fa-solid fa-graduation-cap"></i>
                  <h6>Online Admission 2024 For Inter-</h6>
                  <p><a>Oops! Admission Closed.</a></p>
                </Row>

                <Row className='admission-box-content justify-content-center'>
                  <h6>Admission Schedule For </h6>

                  <table className='table'>
                    <thead>
                      <tr>
                        <th scope='col'>Sr No</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Date/ Timelines</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <th scope='row'>1</th>
                        <td>Hesham Reza</td>
                        <td>03-05-2024</td>
                      </tr>
                    </tbody>
                  </table>
                </Row>
              </Col>
            </Row>
          </Col>
          
          <Col sm='4'>
            <div className='notice-box'>
              <h6>Notice</h6>
              
              <div className='notice-points'>
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
                
                <div className='notices'>
                  <i class="fa-solid fa-angles-right"></i>
                  <p>Result Sheet of UG Semester-III (Hons. & General) Examination 2023</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className='justify-content-center' style={{'margin-top': '10px'}}>
          <Col sm='8'>
            <Row  className='justify-content-center'>
              <Col sm='10' className='admission-info'>
                <h6>Admission Info</h6>

                <ul>
                  <li>User Manual</li>
                  <li>Guidelines for Applicants</li>
                  <li>FAQ</li>
                  <li>Last Date Extended Notification</li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col sm='4'>
            <div className='notice-box'>
              <h6>Instruction</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Home