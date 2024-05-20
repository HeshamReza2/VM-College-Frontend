import React, { useEffect, useState } from 'react'
import './ManageStudent.css'
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import Popup from 'reactjs-popup'
import { useNavigate } from 'react-router'
import Cookies from 'universal-cookie'
import * as XLSX from 'xlsx'

const cookies = new Cookies()

function ManageStudent() {
    const navigate = useNavigate()

    useEffect(() => {
        if(!cookies.get('username')){
            navigate('/')
        }
        
        else if(!cookies.get('password')){
            navigate('/')
        }

        else{
            axios
                .post('http://localhost:8080/admin/login', { username: cookies.get('username'), password: cookies.get('password')})
                .then(res => {
                        if(res.data == 'Valid') console.log('Valid')
                        else navigate('/')
                    })
                .catch(err => console.log(err))
        }
    })
    
    const [ studentsList, setStudentsList ] = useState([])
    const [ studentsList3, setStudentsList3 ] = useState(studentsList)
    console.log(studentsList3);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/students`)
            .then(res => setStudentsList(res.data))
            .catch(err => console.log(err))
    })


    const username = cookies.get('username')
    const password = cookies.get('password')

    const [ permit, setPermit ] = useState(false)

    useEffect(() => {
        axios
            .post('http://localhost:8080/admin/search', { username: username })
            .then(res => setPermit(res.data.access))
            .catch(err => console.log(err))
    }, [])
    
    const [ entriesNum, setEntriesNum ] = useState(10)

    const [ pageCount, setPageCount ] = useState(1)

    const entriesNumCount = () => {
        if(entriesNum <= studentsList3.length) return entriesNum
        else return studentsList3.length
    }

    const [ maxAmount, setMaxAmount ] = useState(entriesNum)
    const [ minAmount, setMinAmount ] = useState(0)

    const [ page, setPage ] = useState(0)

    useEffect(() => {
        setMaxAmount((page+1)*entriesNum)
        setMinAmount(0 + entriesNum*(page))

        if(Math.ceil(studentsList3.length/entriesNum) !== 0) setPageCount(Math.ceil(studentsList3.length/entriesNum))
            else if(Math.ceil(studentsList3.length/entriesNum) == 0) setPageCount(1)
    }, [page, entriesNum, studentsList3])
    const admissionStatus = (status) => {
        if(status == false) return 'Payment Not Done'
        else return 'Payment Done'
    }

    const entryMaxLength = () => {
        if(maxAmount <= studentsList3.length) return `${maxAmount}`
        else return `${studentsList3.length}`
    }

    const [ searchItem, setSearchItem ] = useState('')

    useEffect(() => {
        if(searchItem == '') setStudentsList3(studentsList)
        else setStudentsList3([])
    }, [searchItem, studentsList, studentsList3])

    const [ matches4, setMatches4 ] = useState(window.matchMedia('(max-width: 425px)').matches)

    const popupStyle4 = () => {
        if(matches4 == true) return {'width': '100%'}
        else if(matches4 == false) return {'width': '500px'}
    }

    useEffect(() => {
        window
            .matchMedia('(max-width: 425px)')
            .addEventListener('change', e => setMatches4( e.matches ))
    })

    const [ downloadDisplay, setDownloadDisplay ] = useState({})

    useEffect(() => {
        if(matches4) setDownloadDisplay({marginLeft: 0, marginTop: '12px'})
        else if(!matches4) setDownloadDisplay({marginLeft: '15px', marginTop: 0})
    })

    const [ flip, setFlip ] = useState('')

    const deleteStudent = (id) => {
        axios
            .delete(`http://localhost:8080/delete-student/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const [ newStudent, setNewStudent ] = useState({
        name: '',
        father_name: '',
        mobile: '',
        email: '',
        session: '',
        course: '',
        year: '',
        gender: '',
        category: '',
        amount: ''
    })

    const updateNewStudentData = e => {
        setNewStudent({
            ...newStudent,
            [e.target.name]: e.target.value
        })
    }

    const [ subjects, setSubjects ] = useState([])
    const [ subjects2, setSubjects2 ] = useState([])

    useEffect(() => {
        axios
            .get(`http://localhost:8080/subjects`)
            .then(res => setSubjects(res.data))
            .catch(err => console.log(err))
    }, [])

    function getUniqueListBy(arr, key) {
        let newArr = []
        let uniqueObj = {}
        for(let i in arr){
            var sub = arr[i]['subject']
            uniqueObj[sub] = arr[i]
        }
        for(let i in uniqueObj) newArr.push(uniqueObj[i])
        
        setSubjects2(newArr)
    }

    useEffect(() => {
        if(subjects != [] || subjects !== undefined || subjects !== null){
            getUniqueListBy(subjects, 'subject')
        }
    }, [subjects])

    const [ file, setFile ] = useState(null)
    const [ jsonData, setJsonData ] = useState([])
    //console.log(jsonData);

    useEffect(() => {
        if(file){
            const reader = new FileReader()
            const rABS = !!reader.readAsBinaryString

            reader.onload = e => {
                const bstr = e.target.result
                const wb = XLSX.read(bstr, { type : rABS ? 'binary' : 'array', bookVBA: true })

                const wsname = wb.SheetNames[0]
                const ws = wb.Sheets[wsname]

                const data = XLSX.utils.sheet_to_json(ws)

                setJsonData(data, () => {
                    console.log(JSON.stringify(data, null, 2));
                })
            }

            reader.readAsBinaryString(file)
        }
    }, [file])
  return (
    <Container fluid>
        <Row>
            <Col sm='12' className='dashboard-header'>
                <div className='dashboard-top'>
                    <a><i class="fa-solid fa-graduation-cap"></i></a>
                    <h6>Manage Student</h6>
                </div>

                <div className='dashboard-bottom'>
                    <p>Powered By: Gen Next Information Technology </p>

                    <p>Email to: <a href='mailto:developer@gnextit.com'>developer@gnextit.com</a> / <a href='mailto:info@gnextit.com'>info@gnextit.com</a> / <a href='mailto:conplaint@gnextit.com'>conplaint@gnextit.com</a></p>

                    <p>Talk to: 8017010592 / 9734103591</p>
                </div>
            </Col>

            <Col sm='12' className='add-payment'>
                <div className='buttoned'>
                    <Popup trigger={<button><i class="fa-solid fa-upload"></i> Upload Excel</button>} modal nested contentStyle={popupStyle4()}>
                        {
                            close => (
                                <Container className='add-popup'>
                                    <Row>
                                        <Col sm='12' className='d-flex justify-content-end'>
                                            <button className='close-btn' onClick={() => close()}><i class="fa-solid fa-xmark"></i></button>
                                        </Col>

                                        <Col sm='12' className='add-data-from'>
                                            <h4>Add Student From Excel Sheet</h4>

                                            <form>
                                                <div className='form-group-6'>
                                                    <input type='file' className='form-control my-3 file-input' autoFocus required name='name' placeholder={`Student's Full Name`} onChange={e => setFile(e.target.files[0])} style={{paddingTop: '3px', paddingLeft: '40px'}} />
                                                    <i class="fa-solid fa-file-excel icon-align"></i>
                                                </div>

                                                <div className='buttoned-2'>
                                                    <button className='btn' onClick={e => {
                                                        e.preventDefault()
                                                        // axios
                                                        //     .post(`http://localhost:8080/add-student`, newStudent)
                                                        //     .then(() => {
                                                        //         alert('Student Added')
                                                        //         close()
                                                        //     })
                                                        //     .catch(err => console.log(err))
                                                        //     close()
                                                        navigate('/institute/sample', { state : jsonData }); 
                                                    }}>Add</button>
                                                    <button className='btn' onClick={e => {e.preventDefault(); close();}}>Exit</button>
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        }
                    </Popup>
                    
                    <button style={downloadDisplay}><i class="fa-solid fa-download"></i> Download Excel</button>
                    
                    <Popup trigger={<button><i class="fa-solid fa-plus"></i> Add Student</button>} modal nested contentStyle={popupStyle4()}>
                        {
                            close => (
                                <Container className='add-popup'>
                                    <Row>
                                        <Col sm='12' className='d-flex justify-content-end'>
                                            <button className='close-btn' onClick={() => close()}><i class="fa-solid fa-xmark"></i></button>
                                        </Col>

                                        <Col sm='12' className='add-data-from'>
                                            <h4>Add Student</h4>

                                            <form>
                                                <div className='form-group-6'>
                                                    <input type='text' className='form-control my-3 form-group-6-input' autoFocus required name='name' placeholder={`Student's Full Name`} onChange={updateNewStudentData} />
                                                    <i class="fa-solid fa-user icon-align"></i>
                                                </div>

                                                
                                                <div className='form-group-6'>
                                                    <input type='text' className='form-control my-3 form-group-6-input' autoFocus required name='father_name' placeholder={`Student's Father's Name`} onChange={updateNewStudentData} />
                                                    <i class="fa-solid fa-user icon-align"></i>
                                                </div>
                                                
                                                <div className='form-group-6'>
                                                    <input type='number' className='form-control my-3 form-group-6-input' autoFocus required name='mobile' placeholder={`Mobile No`} onChange={updateNewStudentData} />
                                                    <i class="fa-solid fa-envelope icon-align"></i>
                                                </div>
                                                
                                                <div className='form-group-6'>
                                                    <input type='email' className='form-control my-3 form-group-6-input' autoFocus required name='email' placeholder={`Email Id`} onChange={updateNewStudentData} />
                                                    <i class="fa-solid fa-phone icon-align"></i>
                                                </div>
                                                
                                                <div className='form-group-6 form-group-6-options'>
                                                    <select class="form-select form-group-6-select" aria-label=".form-select-lg example" autoFocus name='session' onChange={updateNewStudentData} >
                                                        <option selected hidden value='2024-2028'>Select Student's Session</option>
                                                        <option value='2024-2028'>2024-2028</option>
                                                    </select>
                                                </div>
                                                
                                                <div className='form-group-6 form-group-6-options'>
                                                    <select class="form-select form-group-6-select" aria-label=".form-select-lg example" autoFocus name='course' onChange={updateNewStudentData} >
                                                        <option selected hidden value=''>Select Student's Course</option>
                                                        {
                                                            subjects2 && subjects2.map((item, index) => {
                                                                return(
                                                                    <option value={item.subject}>{item.subject}</option>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </div>
                                                
                                                <div className='form-group-6 form-group-6-options'>
                                                    <select class="form-select form-group-6-select" aria-label=".form-select-lg example" autoFocus name='year' onChange={updateNewStudentData} >
                                                        <option selected hidden value='2024-2028'>Select Student's Year/Semester</option>
                                                        <option value='1st Semester'>1st Semester</option>
                                                        <option value='2nd Semester'>2nd Semester</option>
                                                        <option value='3rd Semester'>3rd Semester</option>
                                                        <option value='4th Semester'>4th Semester</option>
                                                    </select>
                                                </div>

                                                <div className='form-group-6 form-group-6-options'>
                                                    <select class="form-select form-group-6-select" aria-label=".form-select-lg example" autoFocus name='gender' onChange={updateNewStudentData} >
                                                        <option selected hidden value='2024-2028'>Select Student's Gender</option>
                                                        <option value='Male'>Male</option>
                                                        <option value='Female'>Female</option>
                                                        <option value='Others'>Others</option>
                                                    </select>
                                                </div>

                                                <div className='form-group-6 form-group-6-options'>
                                                    <select class="form-select form-group-6-select" aria-label=".form-select-lg example" autoFocus name='category' onChange={updateNewStudentData} >
                                                        <option selected hidden value='2024-2028'>Select Student's Category</option>
                                                        <option value='General'>General</option>
                                                        <option value='OBC-A'>OBC-A</option>
                                                        <option value='OBC-B'>OBC-B</option>
                                                        <option value='SC'>SC</option>
                                                        <option value='ST'>ST</option>
                                                    </select>
                                                </div>
                                                
                                                <div className='form-group-6'>
                                                    <input type='number' className='form-control my-3 form-group-6-input' autoFocus required name='amount' placeholder={`Student's Fees Amount`} onChange={updateNewStudentData} />
                                                    <i class="fa-solid fa-indian-rupee-sign icon-align"></i>
                                                </div>

                                                <div className='buttoned-2'>
                                                    <button className='btn' onClick={e => {
                                                        e.preventDefault()
                                                        axios
                                                            .post(`http://localhost:8080/add-student`, newStudent)
                                                            .then(() => {
                                                                alert('Student Added')
                                                                close()
                                                            })
                                                            .catch(err => console.log(err))
                                                            close()
                                                    }}>Add</button>
                                                    <button className='btn' onClick={e => {e.preventDefault();close();}}>Exit</button>
                                                </div>
                                            </form>
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        }
                    </Popup>
                    {/* <button><i class="fa-regular fa-pen-to-square"></i> Update payment</button> */}
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
                                <th scope='col'>Name</th>
                                <th scope='col'>Father Name</th>
                                <th scope='col'>Registration No</th>
                                <th scope='col'>Course</th>
                                <th scope='col'>Year/Semester</th>
                                <th scope='col'>Roll No</th>
                                <th scope='col'>Mobile</th>
                                <th scope='col'>Amount</th>
                                <th scope='col'>Admission Status</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                studentsList3 && studentsList3.map((item, index) => {
                                    if(index>=minAmount && index<maxAmount){
                                        return(
                                            <tr key={index}>
                                                <td>{item.name}</td>
                                                <td>{item.father_name}</td>
                                                <td>{item.registration_no}</td>
                                                <td>{item.course}</td>
                                                <td>{item.year}</td>
                                                <td>{item.roll}</td>
                                                <td>{item.mobile}</td>
                                                <td>{item.amount}</td>
                                                <td>{admissionStatus(item.admission_status)}</td>
                                                <td className='btn-act-parent'>
                                                    <button className='btn-act' onClick={e => {e.preventDefault(); navigate(`/institute/edit-student/${item.registration_no}`, {state: item })}} disabled={!permit}><i class="fa-solid fa-pen-to-square"></i></button>
                                                    <Popup trigger={<button className='btn-act' disabled={!permit}><i class="fa-solid fa-trash"></i></button>} modal nested contentStyle={popupStyle4()}>
                                                        {
                                                            close => (
                                                                <>
                                                                    <Container className='delete-popup-container'>
                                                                        <Row className='justify-content-center delete-popup-row'>
                                                                            <Col sm='12' className='delete-popup-col delete-popup-col-1'>
                                                                                <a onClick={e => {e.preventDefault(); close()}} onMouseOver={() => setFlip('fa-flip')} onMouseLeave={() => setFlip('')}><i class={`fa-solid fa-circle-xmark ${flip}`}></i></a>
                                                                            </Col>

                                                                            <Col sm='12' className='delete-popup-col delete-popup-col-2'>
                                                                                <h5>WARNING!</h5>
                                                                                <p>If you proceed, this student data will be deleted!</p>
                                                                                <button onClick={(e) => {e.preventDefault(); deleteStudent(item._id); close();}}>DELETE</button>
                                                                            </Col>
                                                                        </Row>
                                                                    </Container>
                                                                </>
                                                            )
                                                        }
                                                    </Popup>
                                                </td>
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
                        <p>Showing {minAmount+1} to {entryMaxLength()} of {studentsList3.length} items</p>
                    </Col>

                    <Col sm='6' className='paginator'>
                        <ReactPaginate activeClassName={'item active '} breakClassName={'item break-me '} breakLabel={'...'} containerClassName={'pagination'} disabledClassName={'disabled-page'} marginPagesDisplayed={2} nextClassName={'item next '} nextLabel={<i class="fa-solid fa-forward-step" style={{fontSize: '24px'}}></i>} onPageChange={e => setPage(e.selected)} pageCount={pageCount} pageClassName={'item pagination-page '} pageRangeDisplayed={2} previousClassName={'item previous'} previousLabel={<i class="fa-solid fa-backward-step" style={{fontSize: '24px'}}></i>} />

                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default ManageStudent