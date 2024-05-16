import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import './SabpaisaStatus.css'
import queryString from 'query-string'
import { Col, Container, Row } from 'react-bootstrap'

function SabpaisaStatus() {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const url = location.state.pathname
  const params = new URL(url).searchParams

  const status = params.get('status')
  console.log(status)

  const [ statusMessage, setStatusMessage ] = useState('')
  const [ seconds, setSeconds ] = useState(10)
  const [ statusColor, setStatusColor ] = useState('')

  useEffect(() => {
    if(status == 'SUCCESS'){
      setStatusMessage('successful')
      setStatusColor('green')
    }
    else if(status == 'FAILED'){
      setStatusMessage('failed')
      setStatusColor('rgb(165, 0, 0)')
    }
  })

  useEffect(() => {
    setTimeout(() => {
      if(status == 'SUCCESS') navigate('/payment-slip', { state: { pathname: url }})
      else if(status == 'FAILED') navigate('/login')
    }, 10000);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      if(seconds>0) setSeconds(seconds-1)
    }, 1000);
  }, [seconds])
  return (
    <Container className='response-container'>
      <Row className='response-row justify-content-center'>
        <Col sm='12' className='response-col'>
          <a>Payment <a style={{color: statusColor}}><b>{statusMessage}</b></a>! You will be redirected to next page in {seconds} seconds.</a>
          <a>Or you can click <a className='next-page-link'>here</a>...!</a>
        </Col>
      </Row>
    </Container>
  )
}

export default SabpaisaStatus