import React from 'react'
import './css/books.css'
import ReactGA from 'react-ga'

// import preview from '../icons/preview.svg'
// import download from '../icons/download.svg'

const Books = (props) => {

    const ClickHandler = () => {
        ReactGA.event({
            category:`${props.booksList.subject}`,
            action:`${props.booksList.class + ', ' + props.booksList.term + ' Term'}`
        })
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
                        <a 
                            href={props.booksList.file} 
                            target="_blank" rel="noopener noreferrer"
                            onClick={ClickHandler}
                        >
                            <button>
                                DOWNLOAD NOW
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Books
