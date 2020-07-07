import React, {Component} from 'react'
import booksList from '../../api/data.json'
import './css/books.css'

import Books from './Books'

import search from '../../icons/search.svg'

class BooksList extends Component {
    state = {booksList: []}

    componentDidMount(){
        this.setState({booksList: booksList})
    }

    render(){  
        let booksList = this.state.booksList.map(booksList => {
            return <Books booksList={booksList} key={booksList.id} />
        })
        
        return (
            <div className="books">

                <div className="content">
                    <div className="search">
                        <div className="icon-container"><img src={search} className="icons" alt="account" /></div>
                        <div className="search-container"><input type="search" placeholder="Search for subject, class, or keywords..." /></div>
                    </div>

                    <div className="title">
                        <div className="main">16 Books</div>
                        <div className="sub">View all</div>
                    </div>

                    <div>{booksList}</div>
                </div>  

            </div>
        )
    }
}

export default BooksList
