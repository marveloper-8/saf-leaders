import React from 'react'

import './css/navigation.css'

import {
  Link
} from 'react-router-dom'

import home from '../../icons/home.svg'
import book from '../../icons/book.svg'
import account from '../../icons/account.svg'

function NavigationMobile() {
    return (
        <div className="navigation-mobile">
            <div className="tabs">
                <Link className="links" to="/login">
                    <img src={account} className="icons" alt="account" />
                    <br /> Account
                </Link>
            </div>
            <div className="tabs">
                <Link className="links" to="/">
                    <img src={home} className="icons" alt="home" />
                    <br /> Home
                </Link>
            </div>
            <div className="tabs">
                <Link className="links" to="/books">
                    <img src={book} className="icons" alt="book" />
                    <br /> Books
                </Link>
            </div>
        </div>
    )
}

export default NavigationMobile
