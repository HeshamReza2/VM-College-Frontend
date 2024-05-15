import React from 'react'
import './PayReceipt.css'
import { useLocation } from 'react-router'

function PayReceipt() {
    const location = useLocation()

    console.log(location.state)
  return (
    <div>
      PayReceipt
    </div>
  )
}

export default PayReceipt
