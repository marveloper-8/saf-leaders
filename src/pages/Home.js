import React from 'react'
import './css/home.css'
import search from '../icons/search.svg'

import english from '../images/subjects/english.jpg'
import chemistry from '../images/subjects/chemistry.jpg'
import government from '../images/subjects/government.jpg'
import maths from '../images/subjects/maths.jpg'
import physics from '../images/subjects/physics.jpg'
import computer from '../images/subjects/computer.jpg'

function Home() {
    return (
        <div className="home">

            <div className="one">
                <div className="search">
                    <div className="icon-container"><img src={search} className="icons" alt="account" /></div>
                    <div className="search-container"><input type="search" placeholder="Search for subject, class, or keywords..." /></div>
                </div>

                <div className="text">
                    <h1> Lorem ipsum dolor sit amet</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <button>VISIT LIBRARY</button>
            </div>

            <div className="two">
                <div className="title">
                    <div className="main">You Might Like</div>
                    <div className="sub">View all</div>
                </div>

                <div className="content">
                    <div className="column">
                        <img src={english} className="books" alt="subjects - english" />
                        <img src={computer} className="books" alt="subjects - computer" />
                    </div>
                    <div className="column">
                        <img src={maths} className="books" alt="subjects - maths" />
                        <img src={government} className="books" alt="subjects - government" />
                    </div>
                    <div className="column">
                        <img src={physics} className="books" alt="subjects - physics" />
                        <img src={chemistry} className="books" alt="subjects - chemistry" />
                    </div>
                </div>
            </div>

            <div className="three">
                <div className="title">
                    <div className="main">Subjects</div>
                    <div className="sub">View all</div>
                </div>

                <div className="content">
                    <div className="column">
                        <span className="subject">English Language</span>
                        <span className="subject">Basic Science</span>
                        <span className="subject">Government</span>
                    </div>
                    <div className="column">    
                        <span className="subject">Mathematics</span>
                        <span className="subject">Computer Studies</span>
                        <span className="subject">Chemistry</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
