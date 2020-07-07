import React from 'react'

import './css/navigation.css'

import {
  Link
} from 'react-router-dom'

function NavigationMobile() {
    return (
        <div className="navigation-desktop">
            <div className="tabs">
                <Link className="links" to="/login">
                    Account
                </Link>
            </div>
            <div className="tabs">
                <Link className="links" to="/">
                    Home
                </Link>
            </div>
            <div className="tabs">
                <Link className="links" to="/books">
                    Books
                </Link>
            </div>
        </div>
    )
}

export default NavigationMobile
