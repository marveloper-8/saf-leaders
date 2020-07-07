import React, {useState, useContext} from 'react'

import {UserContext} from './App'

import './css/account.css'

import account from '../../images/login.png'

import {
  Link,
  useHistory
} from 'react-router-dom'

const Account = () => {
    const {state, dispatch} = useContext(UserContext)

    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("invalid email")
            return
        }
        fetch("https://safleaders-server.herokuapp.com/signin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.error){
                    alert(data.error)
                }
                else{
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("user", JSON.stringify(data.user))
                    dispatch({type: "USER", payload: data.user})
                    alert("Signed in successfully")
                    history.push('/dashboard')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="account">
            <div className="desktop">

            <div className="content">
                <h1>SIGN INTO AN ACCOUNT</h1>

                <div className="icon">
                    <img src={account} className="icons" alt="account" />
                </div>

                <div className="form">
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
                            type="password" 
                            placeholder="Password..." 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button 
                        onClick={() => PostData()}
                        className="button"
                    >SIGN INTO AN ACCOUNT</button>
                    Don't have an account? &nbsp;
                    <span>
                        <Link className="account-link" to="/signup">
                            Create an account
                        </Link>
                    </span>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Account
