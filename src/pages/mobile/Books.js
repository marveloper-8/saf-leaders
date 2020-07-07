import React, {useContext, useState} from 'react'
import './css/books.css'
import ReactGA from 'react-ga'
import axios from 'axios'

// import preview from '../icons/preview.svg'
// import download from '../icons/download.svg'

import {
    Link,
    useHistory,
    useParams
} from 'react-router-dom'

import {UserContext} from './App'


const Books = (props) => {
    const {state, dispatch} = useContext(UserContext)
    const {userId} = useParams()
    const history = useHistory()

    const ClickHandler = () => {
        ReactGA.event({
            category:`${props.booksList.subject}`,
            action:`${props.booksList.class + ', ' + props.booksList.term + ' Term'}`
        })
    }



    // downloads
    const [downloadState, setDownloadState] = useState({
        firstName: '',
        lastName: '',
        middleName: '',
        email: '',
        phone: '',
        parentFirstName: '',
        parentLastName: '',
        parentMiddleName: '',
        parentPhone: '',
        address: '',
        school: '',
        schoolClass: '',
        schoolDepartment: '',
        bookName: '',
        bookClass: ''
    })
    

    // const handleDownloadChange = (e) => {
    //       setDownloadState({ ...downloadState, [e.target.name]: e.target.value })
    // }

    const handleDownload = (e) => {
          e.preventDefault()
          axios({
                method: "POST",
                url:"https://safleaders-nodemailing.herokuapp.com/downloads", 
                data: {
                    firstName: `${state.firstName}`, 
                    lastName: `${state.lastName}`, 
                    middleName: `${state.middleName}`, 
                    email: `${state.email}`,
                    phone: `${state.phone}`,
                    parentFirstName: `${state.parentFirstName}`,
                    parentLastName: `${state.parentLastName}`,
                    parentMiddleName: `${state.parentMiddleName}`,
                    parentPhone: `${state.parentPhone}`,
                    address: `${state.address}`,
                    school: `${state.school}`,
                    schoolClass: `${state.schoolClass}`,
                    schoolDepartment: `${state.schoolDepartment}`,
                    bookName: `${props.booksList.subject}`,
                    bookClass: `${props.booksList.class}`
                }
          }).then( () => {
                setDownloadState({ 
                    firstName: `${state.firstName}`,
                    lastName: `${state.lastName}`,
                    middleName: `${state.middleName}`, 
                    email: `${state.email}`,
                    phone: `${state.phone}`,
                    parentFirstName: `${state.parentFirstName}`,
                    parentLastName: `${state.parentLastName}`,
                    parentMiddleName: `${state.parentMiddleName}`,
                    parentPhone: `${state.parentPhone}`,
                    address: `${state.address}`,
                    school: `${state.school}`,
                    schoolClass: `${state.schoolClass}`,
                    schoolDepartment: `${state.schoolDepartment}`,
                    bookName: `${props.booksList.subject}`,
                    bookClass: `${props.booksList.class}`
                })
              })
                // .then(
                //     alert("Message sent successfully")
                // )
                .then(
                    console.log("Sent successfully")
                )
              .catch( err => {
                    console.log(err)
                })
                
    }

    const activityButtons = () => {
        if(state){
            return [
                <>
                    <form onSubmit={handleDownload}>
                        <input 
                            name="firstName"
                            type="text"
                            value={state.firstName}
                            hidden
                        />
                        <input 
                            name="lastName"
                            type="text"
                            value={state.lastName}
                            hidden
                        />
                        <input 
                            name="middleName"
                            type="text"
                            value={state.middleName}
                            hidden
                        />
                        <input 
                            name="email"
                            type="text"
                            value={state.email}
                            hidden
                        />
                        <input 
                            name="phone"
                            type="text"
                            value={state.phone}
                            hidden
                        />
                        <input 
                            name="parentFirstName"
                            type="text"
                            value={state.parentFirstName}
                            hidden
                        />
                        <input 
                            name="parentLastName"
                            type="text"
                            value={state.parentLastName}
                            hidden
                        />
                        <input 
                            name="parentMiddleName"
                            type="text"
                            value={state.parentMiddleName}
                            hidden
                        />
                        <input 
                            name="parentPhone"
                            type="text"
                            value={state.parentPhone}
                            hidden
                        />
                        <input 
                            name="address"
                            type="text"
                            value={state.address}
                            hidden
                        />
                        <input 
                            name="school"
                            type="text"
                            value={state.school}
                            hidden
                        />
                        <input 
                            name="schoolClass"
                            type="text"
                            value={state.schoolClass}
                            hidden
                        />
                        <input 
                            name="schoolDepartment"
                            type="text"
                            value={state.schoolDepartment}
                            hidden
                        />
                        <input 
                            name="bookName"
                            type="text"
                            value={props.booksList.subject}
                            hidden
                        />
                        <input 
                            name="bookClass"
                            type="text"
                            value={props.booksList.class}
                            hidden
                        />
                        <a 
                            href={props.booksList.file} 
                            target="_blank" rel="noopener noreferrer"
                            // onClick={ClickHandler}
                            onClick={() => {if(window.confirm('Click "okay" to download')){
                                    alert("Download")
                                    window.location = `${props.booksList.file}`
                                }
                            }}
                        >
                            <button className="download">
                                DOWNLOAD NOW
                            </button>
                        </a>
                    </form>
                        
                    <a 
                        href={props.booksList.mockTest} 
                        target="_blank" rel="noopener noreferrer"
                        // onClick={(ClickHandler)}
                    >
                        <button className="mock-test">
                            TAKE MOCK TEST
                        </button>
                    </a>
                </>
            ]
        } else{
            return [
                <>
                    <Link className="links" to="/login">
                    <button className="download">
                        LOGIN TO DOWNLOAD
                    </button>
                    </Link>
                </>
            ]
        }
    }
    

    return (  
        <div className="list">
            <div className="items">
                <div className="img"><img src={props.booksList.image} alt={props.booksList.alt} /></div>
                <div class="text">
                    <span class="head">{props.booksList.subject}</span>
                    <span class="sub">{props.booksList.class}</span>
                    <p>{props.booksList.term} Term</p>
                    <div className="download">
                        {activityButtons()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books
