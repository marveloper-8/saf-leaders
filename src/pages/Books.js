import React from 'react'
import './css/books.css'
import search from '../icons/search.svg'
import preview from '../icons/preview.svg'
import download from '../icons/download.svg'

import english from '../images/subjects/english.jpg'
import chemistry from '../images/subjects/chemistry.jpg'
import government from '../images/subjects/government.jpg'
import maths from '../images/subjects/maths.jpg'
import physics from '../images/subjects/physics.jpg'
import computer from '../images/subjects/computer.jpg'

function Books() {
    return (
        <div className="books">

            <div className="content">
                <div className="search">
                    <div className="icon-container"><img src={search} className="icons" alt="account" /></div>
                    <div className="search-container"><input type="search" placeholder="Search for subject, class, or keywords..." /></div>
                </div>

                <div className="title">
                    <div className="main">6 Books</div>
                    <div className="sub">View all</div>
                </div>
                
                <div className="list">
                    <div className="items">
                        <div className="img"><img src={english} alt="subjects - english" /></div>
                        <div class="text">
                            <span class="head">English Language</span>
                            <span class="sub">Senior Secondary One</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="icons">
                                <div className="preview"><img src={preview} alt="preview" /></div>
                                <div className="download"><img src={download} alt="download" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div className="img"><img src={computer} alt="subjects - computer" /></div>
                        <div class="text">
                            <span class="head">Computer Science</span>
                            <span class="sub">Senior Secondary One</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="icons">
                                <div className="preview"><img src={preview} alt="preview" /></div>
                                <div className="download"><img src={download} alt="download" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div className="img"><img src={maths} alt="subjects - maths" /></div>
                        <div class="text">
                            <span class="head">Mathematics</span>
                            <span class="sub">Senior Secondary One</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="icons">
                                <div className="preview"><img src={preview} alt="preview" /></div>
                                <div className="download"><img src={download} alt="download" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div className="img"><img src={government} alt="subjects - government" /></div>
                        <div class="text">
                            <span class="head">Government</span>
                            <span class="sub">Senior Secondary One</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="icons">
                                <div className="preview"><img src={preview} alt="preview" /></div>
                                <div className="download"><img src={download} alt="download" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div className="img"><img src={physics} alt="subjects - physics" /></div>
                        <div class="text">
                            <span class="head">Physics</span>
                            <span class="sub">Senior Secondary One</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="icons">
                                <div className="preview"><img src={preview} alt="preview" /></div>
                                <div className="download"><img src={download} alt="download" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="items">
                        <div className="img"><img src={chemistry} alt="subjects - chemistry" /></div>
                        <div class="text">
                            <span class="head">Chemistry</span>
                            <span class="sub">Senior Secondary One</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <div className="icons">
                                <div className="preview"><img src={preview} alt="preview" /></div>
                                <div className="download"><img src={download} alt="download" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  

        </div>
    )
}

export default Books
