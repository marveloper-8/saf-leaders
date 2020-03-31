import React from 'react'
import './css/account.css'
import account from '../icons/account-round.svg'

function Account() {
    return (
        <div className="account">

            <div className="content">
                <h1>Login</h1>

                <div className="icon">
                    <img src={account} className="icons" alt="account" />
                </div>

                <form className="form">
                    <div class="input">
                        <input type="email" placeholder="Email..." />
                    </div>

                    <div class="input">
                        <input type="password" placeholder="Password..." />
                    </div>

                    <button className="button">SIGN INTO AN ACCOUNT</button>
                    <button className="button-two">CREATE AN ACCOUNT</button>
                </form>
            </div>

        </div>
    )
}

export default Account
