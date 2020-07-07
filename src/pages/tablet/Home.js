import React from 'react'
import './css/home.css'

import {
  Link
} from 'react-router-dom'

import english from '../../images/subjects/english.jpg'
import maths from '../../images/subjects/maths.jpg'
import civic from '../../images/subjects/civic.jpg'

function Home() {
    return (
        <div className="home">

            <div className="tablet">

                <div className="one">
                    <div className="text">
                        <h1>Student Online Library for continuous learning</h1>

                        <p>An initiative to actively engage secondary school students in Nigeria due to the COVID 19 pandemic</p>
                    </div>

                    <Link to="/books"><button>VISIT LIBRARY</button></Link>
                </div>

                <div className="two">
                    <div className="title">
                        <div className="main">You Might Like</div>
                        <div className="sub">View all</div>
                    </div>

                    <div className="content">
                        <div className="column">
                        <Link to="/books">
                            <img src={english} className="books" alt="subjects - english" />
                        </Link>
                        </div>

                        <div className="column">
                        <Link to="/books">
                            <img src={maths} className="books" alt="subjects - maths" />
                        </Link>
                        </div>

                        <div className="column">
                        <Link to="/books">
                            <img src={civic} className="books" alt="subjects - civic" />
                        </Link>
                        </div>
                    </div>
                </div>

                <div className="three">
                    <div className="title">
                        <div className="main">Subjects</div>
                        <div className="sub">View all</div>
                    </div>

                    <div className="content">
                        <Link to="/books"><span className="subject">English Language</span></Link>
                        <Link to="/books"><span className="subject">Basic Science</span></Link>
                        <Link to="/books"><span className="subject">Government</span></Link>    
                        <Link to="/books"><span className="subject">Mathematics</span></Link>
                        <Link to="/books"><span className="subject">Computer Studies</span></Link>
                        <Link to="/books"><span className="subject">Chemistry</span></Link>
                    </div>
                </div>
                
                <hr />

                <div className="four">

                    <div className="content">
                        <div className="column">
                            <img src="https://safleaders.org/images/sponsors/saf.jpg" className="books" alt="subjects - civic" />
                        </div>
                        <div className="column">
                            <img src="https://safleaders.org/images/sponsors/educational-reform.jpg" className="books" alt="subjects - civic" />
                        </div>
                        <div className="column">
                            <img src="https://safleaders.org/images/sponsors/yali.jpg" className="books" alt="subjects - civic" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
