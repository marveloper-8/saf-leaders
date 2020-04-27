import React from 'react'
import './css/navigation.css'

function NavigationTablet() {
    return (
        <div className="navigation-tablet">
            <h1 className="head">Tablet Version, Coming Soon!!</h1>
            <img className="image" src="https://safleaders.org/images/clock.gif" alt="clock" />
            <p className="text">Open on your mobile device <span role="img" aria-label="josh">👍🏾</span></p>
            <p className="footer">
            Send us an email at <a className="link" href="mailto:hello@safleaders.org">hello@safleaders.org</a>. 
            
            Or call us on <a className="link" href="tel:+2348087584302">0808 758 4302</a></p>
        </div>
    )
}

export default NavigationTablet
