import React, {useState} from 'react'
import './css/account.css'
import account from '../../images/signup.png'

import {
  Link,
  useHistory
} from 'react-router-dom'

function Account() {
    const history = useHistory()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [parentFirstName, setParentFirstName] = useState("")
    const [parentLastName, setParentLastName] = useState("")
    const [parentMiddleName, setParentMiddleName] = useState("")
    const [parentEmail, setParentEmail] = useState("")
    const [parentPhone, setParentPhone] = useState("")
    const [address, setAddress] = useState("")
    const [school, setSchool] = useState("")
    const [schoolClass, setSchoolClass] = useState("")
    const [schoolDepartment, setSchoolDepartment] = useState("")
    const [password, setPassword] = useState("")

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("invalid email")
            return
        }
        fetch("https://safleaders-server.herokuapp.com/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName,
                lastName,
                middleName,
                email,
                phone,
                parentFirstName,
                parentLastName,
                parentMiddleName,
                parentEmail,
                parentPhone,
                address,
                school,
                schoolClass,
                schoolDepartment,
                password
            })
        }).then(res => res.json())
            .then(data => {
                if(data.error){
                    alert(data.error)
                }
                else{
                    alert(data.message)
                    history.push('/login')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="account">
            <div className="mobile">

            <div className="content">
                <h2>CREATE AN ACCOUNT</h2>

                <div className="icon">
                    <img src={account} className="icons" alt="account" />
                </div>

                <div className="form">
                    <div class="input">
                        <input 
                            type="text" 
                            placeholder="First Name..." 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    
                    <div class="input">
                        <input 
                            type="text" 
                            placeholder="Last Name..." 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    
                    <div class="input">
                        <input 
                            type="text" 
                            placeholder="Middle Name..."
                            value={middleName}
                            onChange={(e) => setMiddleName(e.target.value)}
                        />
                    </div>

                    <div class="input">
                        <input 
                            type="email" 
                            placeholder="Email..."
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div class="input">
                        <input 
                            type="tel" 
                            placeholder="Phone..." 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    
                    <div class="input">
                        <input 
                            type="text" 
                            placeholder="Parent's First Name..."
                            value={parentFirstName}
                            onChange={(e) => setParentFirstName(e.target.value)}
                        />
                    </div>
                    
                    <div class="input">
                        <input 
                            type="text" 
                            placeholder="Parent's Last Name..." 
                            value={parentLastName}
                            onChange={(e) => setParentLastName(e.target.value)}
                        />
                    </div>
                    
                    <div class="input">
                        <input 
                            type="text" 
                            placeholder="Parent's Middle Name..." 
                            value={parentMiddleName}
                            onChange={(e) => setParentMiddleName(e.target.value)}
                        />
                    </div>

                    <div class="input">
                        <input 
                            type="email" 
                            placeholder="Parent's Email..." 
                            value={parentEmail}
                            onChange={(e) => setParentEmail(e.target.value)}
                        />
                    </div>

                    <div class="input">
                        <input 
                            type="tel" 
                            placeholder="Parent's Phone..."
                            value={parentPhone}
                            onChange={(e) => setParentPhone(e.target.value)}
                        />
                    </div>
                    
                    <div class="input">
                        <input 
                            type="text" 
                            placeholder="Your Address..."
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    
                    <div class="input">
                        <input 
                            type="text" 
                            placeholder="Your School..."
                            value={school}
                            onChange={(e) => setSchool(e.target.value)}
                        />
                    </div> 
                    
                    <div class="input">
                        <input 
                            type="text" 
                            placeholder="Your Class in School..." 
                            value={schoolClass}
                            onChange={(e) => setSchoolClass(e.target.value)}
                        />
                    </div>
                    
                    <div class="input">
                        <input 
                            type="text" 
                            placeholder="Your Department in School..." 
                            value={schoolDepartment}
                            onChange={(e) => setSchoolDepartment(e.target.value)}
                        />
                    </div>

                    <div class="input">
                        <input 
                            type="password" 
                            placeholder="Password..." 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button 
                        className="button"
                        onClick={() => PostData()}
                    >CREATE AN ACCOUNT</button>
                    Have an account? &nbsp;
                    <span>
                        <Link className="account-link" to="/login">
                            Sign into your account
                        </Link>
                    </span>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Account
