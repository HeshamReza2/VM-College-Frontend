import React, { useEffect, useMemo, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router'
import countryList from 'react-select-country-list'
import SabpaisaPaymentGateway from './SabpaisaPaymentGateway'

function StudentReview() {
    const navigate = useNavigate()
    const location = useLocation()

    const [ data2, setData2 ] = useState([])
    console.log(data2)
    // const [ dob, setDob ] = useState(new Date.now())
    // useEffect(() => {
    //     var y = dob.getFullYear()
    //     var m = dob.getMonth()
    //     var d = dob.getDate()
        
    //     setDob [y, m, d].join('-')
    // })
    // console.log(dob);

    useEffect(() => {
        if(location.state == null) navigate('/login')
        else{
            setData2(location.state)
        }
    }, [])
    console.log(location.state)
    const options = useMemo(() => countryList().getData(), [])

    const updateNumber = e => {
        if(e.target.value.length > 10){
            e.target.value = e.target.value.slice(0, 10)
        }
    }

    const religionsList = [ 'Brahmoism', 'Buddhism', 'Christianity', 'Hinduism', 'Islam', 'Jainism', 'Sikhism', 'Zoroastrianism', 'Non Believer', 'Not to be Disclosed', 'Others']

    const boardsList = [
        'BOARD OF INTERMEDIATE EDUCATION (ANDHRA PRADESH)', 'BOARD OF SECONDARY EDUCATION (ANDHRA PRADESH)', 'A.P. OPEN SCHOOL SOCIETY Govt. of Andhra Pradesh', 'ASSAM HIGHER SECONDARY EDUCATION COUNCIL', 'BOARD OF SECONDARY EDUCATION, ASSAM', 'ASSAM SANSKRIT BOARD', 'STATE MADRASSA EDUCATION BOARD, ASSAM', 'ALIGARH MUSLIM UNIVERSITY BOARD OF SECONDARY & SR. SECONDARY EDUCATION', 'BIHAR SCHOOL EXAMINATION BOARD', 'BIHAR BOARD OF OPEN SCHOOLING & EXAMINATION', 'BIHAR STATE MADRASA EDUCATION BOARD', 'BIHAR SANSKRIT SHIKSHA BOARD', 'BANASTHALI VIDYAPITH', 'CENTRAL BOARD OF SECONDARY EDUCATION', 'CHHATISGARH BOARD OF SECONDARY EDUCATION', 'CHHATISGARH STATE OPEN SCHOOL', 'CHHATTISGARH SANSKRIT BOARD, RAIPUR', 'CHHATTISGARH MADRASA BOARD', 'COUNCIL FOR THE INDIAN SCHOOL CERTIFICATE EXAMINATIONS', 'DELHI BOARD OF SENIOR SECONDARY EDUCATION', 'DAYALBAGH EDUCATIONAL INSTITUTE', 'DELHI STATE OPEN SCHOOL', 'ICSE BOARD ( INDIAN COUNCIL OF SECONDARY EDUCATION / INDIAN SCHOOL CERTIFICATE EXAMINATION)', 'GOA BOARD OF SECONDARY AND HIGHER SECONDARY EDUCATION', 'GUJARAT SECONDARY AND HIGHER', 'BOARD OF SCHOOL EDUCATION HARYANA', 'Gurukula Kangri Vishwavidyalaya', 'H. P. BOARD OF SCHOOL EDUCATION', 'The J & K STATE BOARD OF SCHOOL EDUCATION', 'JAMMU AND KASHMIR STATE OPEN SCHOOL', 'JHARKHAND ACADEMIC COUNCIL,RANCHI', 'GOVT. OF KARNATAKA DEPT. OF PRE-UNIVERSITY EDUCATION', 'KARNATAKA SECONDARY EDUCATION, EXAMINATION BOARD', 'KERALA BOARD OF PUBLIC EXAMINATION , KERALA', 'KERALA BOARD OF HIGHER SECONDARY EDUCATION', 'BOARD OF VOCATIONAL HIGHER', 'MAHARASHTRA STATE BOARD OF SECONDARY AND HIGHER SECONDARY EDUCATION', 'BOARD OF SECONDARY EDUCATION, MADHYA PRADESH', 'M.P. STATE OPEN SCHOOL EDUCATION BOARD', 'MAHARISHI PATANJALI SANSKRIT SANSTHAN', 'BOARD OF SECONDARY EDUCATION, MANIPUR', 'COUNCIL OF HIGHER SECONDARY EDUCATION, MANIPUR', 'MEGHALAYA BOARD OF SCHOOL EDUCATION', 'MIZORAM BOARD OF SCHOOL EDUCATION', 'NAGALAND BOARD OF SCHOOL EDUCATION', 'NATIONAL INSTITUTE OF RURAL OPEN SCHOOLING', 'NATIONAL INSTITUTE OF OPEN SCHOOLING', 'NATIONAL INSTITUTE OF OPEN SCHOOLING', 'COUNCIL OF HIGHER SECONDARY EDUCATION, ODISHA', 'BOARD OF SECONDARY EDUCATION, ODISHA', 'PUNJAB SCHOOL EDUCATION BOARD', 'BOARD OF SECONDARY EDUCATION RAJASTHAN', 'RAJASTHAN STATE OPEN SCHOOL, JAIPUR', 'CENTRAL SANSKRIT UNIVERSITY', 'STATE BOARD OF SCHOOL EXAMINATIONS(SEC.) & BOARD OF HIGHER SECONDARY EXAMINATIONS, TAMIL NADU', 'TELANGANA STATE BOARD OF INTERMEDIATE EDUCATION', 'BOARD OF SECONDARY EDUCATION', 'TELANGANA OPEN SCHOOL SOCIETY Government of Telangana', 'RAJIV GANDHI UNIVERSITY OF KNOWLEDGE TECHNOLOGIES ( RGUKT)', 'TRIPURA BOARD OF SECONDARY EDUCATION', 'U.P. BOARD OF HIGH SCHOOL & INTERMEDIATE EDUCATION', 'U.P. Board of SEC. SANSKRIT EDUCATION', 'BOARD OF SCHOOL EDUCATION UTTARAKHAND', 'UTTRAKHAND SANSKRIT', 'UTTRAKHAND MADRASA EDUCATION BOARD', 'WEST BENGAL BOARD OF SECONDARY EDUCATION', 'WEST BENGAL COUNCIL OF HIGHER SECONDARY EDUCATION', 'WEST BENGAL BOARD OF MADRASAH EDUCATION', 'THE WEST BENGAL COUNCIL OF RABINDRA OPEN SCHOOLING', 'COUNCIL OF UNIVERSAL BUDDHIST UNIVERSITY, NAGPUR', 'ODISHA STATE BOARD OF MADRASA EDUCATION', 'WEST BENGAL STATE COUNCIL OF TECHNICAL & VOCATIONAL EDUCATION & SKILL DEVELOPMENT (WBSCT&VE&SD)', 'BOARD OF OPEN SCHOOLING & SKILL EDUCATION (BOSSE)', 'BHARTIYA SHIKSHA BOARD'
    ]

    const updateData = e => {
        setData2({
            ...data2,
            [e.target.name]: e.target.value
        })
    }

    const reEdit = e => {
        e.preventDefault()
        navigate(-1, { state: data2 })
    }

    const continuePayment = e => {
        e.preventDefault()
    }

    const [isOpen, setIsOpen] = useState(false);
    const [clientCode, setClientCode] = useState("NITE5");
    const [transUserName, setTransUserName] = useState("Ish988@sp");
    const [transUserPassword, setTransUserPassword] = useState("wF2F0io7gdNj");
    const [authkey, setAuthkey] = useState("vuQy2eFx4q095E03");
    const [authiv, setAuthiv] = useState("qz7zPW07upqREhuo");
    const [payerName, setPayerName] = useState("Hesham Reza");
    const [payerEmail, setPayerEmail] = useState("heshamreza2@gmail.com");
    const [payerMobile, setPayerMobile] = useState("6295087117");
    const [clientTxnId, setclientTxnId] = useState("123456");
    const [amount, setAmount] = useState(90);
    const [payerAddress, setPayerAddress] = useState("Kolkata");
    const [callbackUrl, setCallbackUrl] = useState("http://localhost:3000/response");
    const [data, setData] = useState(null)
    const [udf1, setudf1] = useState(null);
    const [udf2, setudf2] = useState(null);
    const [udf3, setudf3] = useState(null);
    const [udf4, setudf4] = useState(null);
    const [udf5, setudf5] = useState(null);
    const [udf6, setudf6] = useState(null);
    const [udf7, setudf7] = useState(null);
    const [udf8, setudf8] = useState(null);
    const [udf9, setudf9] = useState(null);
    const [udf10, setudf10] = useState(null);
    const [udf11, setudf11] = useState(null);
    const [udf12, setudf12] = useState(null); // client id
    const [udf13, setudf13] = useState(null); // plan id
    const [udf14, setudf14] = useState(null); // plan name
    const [udf15, setudf15] = useState(null); // application id (product id)
    const [udf16, setudf16] = useState(null); // client subscribe plan detail id(refer to DB)
    const [udf17, setudf17] = useState(null); // payment from the COB portal
    const [udf18, setudf18] = useState(null);
    const [udf19, setudf19] = useState(null);
    const [udf20, setudf20] = useState(null);
    const [channelId, setchannelId] = useState(null);
    const [programId, setprogramId] = useState(null);
    const [mcc, setmcc] = useState(null);
    const [amountType, setamountType] = useState(null);
    const [selectedOption, setSelectedOption] = useState('')

    useEffect(() => {
        if(data2 != [] || data2 !== null || data2 !== undefined){
            setPayerName(data2.name)
            setPayerEmail(data2.email)
            setPayerMobile(data2.mobile)
            setPayerAddress(`${data2.street_name}, ${data2.city}, ${data2.state}, ${data2.country}`)
        }
    })


    const handleSubmit = (e) => {
        setIsOpen(true);
        e.preventDefault()
        const btn = document.getElementById('renderSabPaisa');
        btn.click();
    }

  return (
    <Container fluid>
        <Row className='justify-content-center'>
            <Col sm='12' className='intake-head'>
                <div className='intake-head-div'>
                    <h6>Review Application</h6>
                </div>
            </Col>
        </Row>

        <Row>
            <Col sm='12' className='details-edit'>
                <form>
                    <Row className='details-edit-student'>
                        <Col sm='12' className='students-edit-header'>
                            <h6>Personal Details</h6>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='registration_no'>Registration Number</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='registration_no' placeholder='Enter Your Registration Number' value={data2.registration_no || ''} />
                            <i class="fa-solid fa-hashtag errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='name'>Name</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='name' placeholder='Enter Your Name' value={data2.name || ''} />
                            <i class="fa-solid fa-user errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='gender'>Gender</label>
                            
                            <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='gender' >
                                <option selected hidden value={data2.gender || ''}>{data2.gender || 'Select Your Gender'}</option>
                            </select>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='dob'>DoB</label>

                            <input type='date' className='form-control my-3 input-text' autoFocus name='dob' placeholder='Enter Your DoB' value={data2.dob || ''} />
                            <i class="fa-solid fa-calendar errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='country'>Nationality</label>

                            <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='country' >
                                <option selected hidden value={data2.country || ''}>{data2.country || 'Enter Your Nationality'}</option>
                            </select>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='mobile'>Mobile Number</label>

                            <input type='number' className='form-control my-3 input-text' autoFocus name='mobile' placeholder='Enter Your Mobile Number' value={data2.mobile || ''} />
                            <i class="fa-solid fa-phone errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='mobile_2'>Alternate Mobile Number</label>

                            <input type='number' className='form-control my-3 input-text' autoFocus name='mobile_2' placeholder='Enter Your Alternate Mobile Number' value={data2.mobile_2 || ''} />
                            <i class="fa-solid fa-phone errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='email'>Email</label>

                            <input type='email' className='form-control my-3 input-text' autoFocus name='email' placeholder='Enter Your Email Id' value={data2.email || ''} />
                            <i class="fa-solid fa-envelope errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='blood_group'>Blood Group</label>
                            
                            <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='blood_group' >
                                <option selected hidden value={data2.blood_group || ''}>{data2.blood_group || 'Select Your Blood Group'}</option>
                            </select>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='course'>Course</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus required name='course' placeholder='Enter Your Course Name' value={data2.course || ''} />
                            <i class="fa-solid fa-laptop errspan"></i>
                        </Col>
                    </Row>

                    <Row className='details-edit-student'>
                        <Col sm='12' className='students-edit-header'>
                            <h6>Social Details</h6>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='aadhar'>Aadhar Number</label>

                            <input type='number' className='form-control my-3 input-text' autoFocus name='aadhar' placeholder='Enter Your Aadhar Number' value={data2.aadhar || ''} />
                            <i class="fa-solid fa-id-badge errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='category'>Category</label>
                            
                            <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='category' >
                                <option selected hidden value={data2.category || ''}>{data2.category || 'Select Your Category'}</option>
                            </select>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='martial_status'>Martial Status</label>
                            
                            <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='martial_status' >
                                <option selected hidden value={data2.martial_status || ''}>{data2.martial_status || 'Select Your Martial Status'}</option>
                            </select>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='religion'>Religion</label>
                            
                            <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='religion' >
                                <option selected hidden value={data2.religion || ''}>{data2.religion || 'Select Your Religion'}</option>
                            </select>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='annual_income'>Annual Family Income</label>

                            <input type='number' className='form-control my-3 input-text' autoFocus name='annual_income' placeholder='Enter Your Annual Family Income' value={data2.annual_income || ''} />
                            <i class="fa-solid fa-indian-rupee-sign errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='disability'>Person with Disability</label>
                            
                            <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='disability' >
                                <option selected hidden value={data2.disability || ''}>{data2.disability || 'Select Your Disability Status'}</option>
                            </select>
                        </Col>
                    </Row>

                    <Row className='details-edit-student'>
                        <Col sm='12' className='students-edit-header'>
                            <h6>Parents Details</h6>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='father_name'>Father's Name</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='father_name' placeholder={`Enter Your Father's Name`} value={data2.father_name || ''} />
                            <i class="fa-solid fa-user errspan"></i>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='father_occupation'>Father's Occupation</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='father_occupation' placeholder={`Enter Your Father's Occupation`} value={data2.father_occupation || ''} />
                            <i class="fa-solid fa-business-time errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='father_mobile'>Father's Mobile Number</label>

                            <input type='number' className='form-control my-3 input-text' autoFocus name='father_mobile' placeholder={`Enter Your Father's Mobile Number`} value={data2.father_mobile || ''} />
                            <i class="fa-solid fa-phone errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'></Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='mother_name'>Mother's Name</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='mother_name' placeholder={`Enter Your Mother's Name`} value={data2.mother_name || ''} />
                            <i class="fa-solid fa-user errspan"></i>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='mother_occupation'>Mother's Occupation</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='mother_occupation' placeholder={`Enter Your Mother's Occupation`} value={data2.mother_occupation || ''} />
                            <i class="fa-solid fa-business-time errspan"></i>
                        </Col>

                        <Col sm='3' className='form-group-4'>
                            <label for='mother_mobile'>Mother's Mobile Number</label>

                            <input type='number' className='form-control my-3 input-text' autoFocus name='mother_mobile' placeholder={`Enter Your Mother's Mobile Number`} value={data2.mother_mobile || ''} />
                            <i class="fa-solid fa-phone errspan"></i>
                        </Col>
                    </Row>

                    <Row className='details-edit-student'>
                        <Col sm='12' className='students-edit-header'>
                            <h6>Address</h6>
                        </Col>
                        
                        <Col sm='6' className='form-group-4'>
                            <label for='street_name'>Street Address</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='street_name' placeholder='Enter Your Street Address' value={data2.street_name || ''} />
                            <i class="fa-solid fa-location-dot errspan"></i>
                        </Col>
                        
                        <Col sm='6' className='form-group-4'>
                            <label for='street_name_2'>Street Address Line 2</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='street_name_2' placeholder='Enter Your Street Address Line 2' value={data2.street_name_2 || ''} />
                            <i class="fa-solid fa-location-dot errspan"></i>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='city'>City</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='city' placeholder='Enter Your City' value={data2.city || ''} />
                            <i class="fa-solid fa-city errspan"></i>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='state'>State</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='state' placeholder='Enter Your State' value={data2.state || ''} />
                            <i class="fa-solid fa-location-dot errspan"></i>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='pincode'>Pin Code</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='pincode' placeholder='Enter Your Pin Code' value={data2.pincode || ''} />
                            <i class="fa-solid fa-address-card errspan"></i>
                        </Col>
                    </Row>

                    <Row className='details-edit-student'>
                        <Col sm='12' className='students-edit-header'>
                            <h6>Educational Details</h6>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='hs_board'>10+2 Board Name</label>

                            <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='hs_board' >
                                <option selected hidden value={data2.hs_board || ''}>{data2.hs_board || 'Select Your 10+2 Board'}</option>
                            </select>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='hs_stream'>10+2 Stream</label>
                            
                            <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='hs_stream' >
                                <option selected hidden value={data2.hs_stream || ''}>{data2.hs_stream || 'Select Your 10+2 Stream'}</option>
                            </select>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='hs_year'>10+2 Pass Year</label>
                            
                            <select class="form-select input-select admission-select" aria-label=".form-select-lg example" autoFocus name='hs_year' >
                                <option selected hidden value={data2.hs_year || ''}>{data2.hs_year || 'Select Your 10+2 Pass Year'}</option>
                            </select>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='hs_reg_no'>10+2 Registration Number</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='hs_reg_no' placeholder='Enter Your 10+2 Registration Number' value={data2.hs_reg_no || ''} />
                            <i class="fa-solid fa-hashtag errspan"></i>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='hs_roll_no'>10+2 Roll Number</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='hs_roll_no' placeholder='Enter Your 10+2 Roll Number' value={data2.hs_roll_no || ''} />
                            <i class="fa-solid fa-hashtag errspan"></i>
                        </Col>
                        
                        <Col sm='3' className='form-group-4'>
                            <label for='hs_marks'>10+2 Marks in Percentage(%)</label>

                            <input type='text' className='form-control my-3 input-text' autoFocus name='hs_marks' placeholder='Enter Your 10+2 Marks in Percentage(%)' value={data2.hs_marks || ''} />
                            <i class="fa-solid fa-marker errspan"></i>
                        </Col>
                    </Row>
                    
                    <Row className='justify-content-center'>
                        <Col sm='3'>
                            <div className='buttons'>
                                <button className='btn btn-primary' onClick={reEdit}>Re-Edit Application</button>
                            </div>
                        </Col>
                        <Col sm='3'>
                            <div className='buttons'>
                                <button className='btn btn-primary' onClick={handleSubmit}>Continue For Payment</button>
                            </div>
                        </Col>
                    </Row>
                    
                    <SabpaisaPaymentGateway clientCode={clientCode} transUserName={transUserName} transUserPassword={transUserPassword} authkey={authkey} authiv={authiv} payerName={payerName} payerEmail={payerEmail} payerMobile={payerMobile} clientTxnId={clientTxnId} amount={amount} payerAddress={payerAddress} callbackUrl={callbackUrl} isOpen={isOpen} />
                </form>
            </Col>
        </Row>
    </Container>
  )
}

export default StudentReview