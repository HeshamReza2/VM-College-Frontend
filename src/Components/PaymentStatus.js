import React from 'react'
import './PaymentStatus.css'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router';

function PaymentStatus() {
  const location = useLocation();
    const resutfromResponse = location?.state?.data;
    console.log("Payment Gateway Response ::", resutfromResponse);
    

    const pairs = resutfromResponse.split("&")

    const keyValuePairs = pairs.map((pair, index) => {
        const [key, value] = pair.split("=")
        const decodedValue = decodeURIComponent(value)
        return { id: index + 1, key, value: decodedValue }
    })
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm='12' className='intake-head'>
            <div className='intake-head-div'>
              <h6>Payment Status</h6>
            </div>
          </Col>

          <Col sm='12' className='merit-head'>
            <div className='select-list'>
              <label for='courses'>Registration No</label>
              <input id='app_input' type='text' name='registration_no' placeholder='Enter Your Registration Number' required />
            </div>
            
            <div className='select-list'>
              <label for='courses'>Select Course</label>
              <select id='select' name='course'>
                <option value='Please Select Course' disabled selected hidden>Please Select Course</option>
                <option value=''></option>
              </select>
            </div>
            
            <div className='select-list'>
              <label for='courses'>Date of Birth</label>
              <input id='app_input' type='date' name='dob' placeholder='Enter Your Date of Birth' required />
            </div>

              <div className='searching'>
                <button>Search</button>
              </div>
          </Col>

          <Col sm='12'>
            <table className="table table-hover">
              <thead>
                <tr className='bg-success text-white'>
                  <th scope="col">Sl No.</th>
                  <th scope="col">Key</th>
                  <th scope="col">Values</th>
                </tr>
              </thead>
              {keyValuePairs.map(pair => (
                <tbody key={pair.id} className='bg-warning text-white'>
                  <tr>
                    <th scope="row">{pair.id}</th>
                    <td>{pair.key}</td>
                    <td>{pair.value}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PaymentStatus