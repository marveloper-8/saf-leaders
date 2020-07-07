import React, {useContext} from 'react'
import {UserContext} from './App'
import {useParams} from 'react-router-dom'

import './css/account.css'

import account from '../../images/login.png'

import {
  Link
} from 'react-router-dom'

const Dashboard = () => {
    const {state, dispatch} = useContext(UserContext)
    const {userId} = useParams()

    console.log(userId)

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
                        <p>{state ? state.firstName: "loading"}</p>
                    </div>

                    <div class="input">
                        <p>{state ? state.email: "loading"}</p>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Dashboard
