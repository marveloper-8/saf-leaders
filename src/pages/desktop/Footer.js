import React from 'react'
import './css/footer.css'

// import preview from '../icons/preview.svg'
// import download from '../icons/download.svg'

const Footer = () => {
    return (  
        <div className="footer-desktop">
            Send us an email at <a className="link" href="mailto:hello@safleaders.org">hello@safleaders.org</a> Or call us on <a className="link" href="tel:+2348087584302">0808 758 4302</a>
            <br />
            Drop your feedback <a className="link" href="https://bit.ly/CLP_FeedbackForm">here</a>
        </div>
    )
}

export default Footer
