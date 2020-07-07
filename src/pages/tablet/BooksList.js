import React, {Component} from 'react'
import booksList from '../../api/data.json'
import './css/books.css'

import Books from './Books'

import search from '../../icons/search.svg'

function searchingFor(searchList){
    return function(x){
        return x.subject.toLowerCase().includes(searchList.toLowerCase()) || x.term.toLowerCase().includes(searchList.toLowerCase()) || x.class.toLowerCase().includes(searchList.toLowerCase()) || !searchList;
    }
}

class BooksList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             booksList: [],
             searchList: ''
        }
        this.searchHandler = this.searchHandler.bind(this)
    }

    searchHandler(e){
        this.setState({searchList: e.target.value})
    }
 
    componentDidMount(){
        this.setState({booksList: booksList})
    }

    render(){

        let booksList = this.state.booksList.filter(searchingFor(this.state.searchList)).map(booksList => {
            return <Books booksList={booksList} key={booksList.id} />
        })
        
        return (
            <div className="books">
                <div className="tablet">

                <div className="content">
                    <div className="search">
                        <div className="icon-container"><img src={search} className="icons" alt="account" /></div>
                        <form className="search-container"><input
                            type="text"
                            placeholder="Search for subject, class, or keywords..." 
                            onChange={this.searchHandler}
                            value={this.state.searchList}
                        /></form>
                    </div>

                    <div className="title">
                        <div className="main">28 Books</div>
                        <div className="sub">View all</div>
                    </div>

                    <div className="list-container">{booksList}</div>
                </div>  

                </div>
            </div>
        )
    }
}

export default BooksList
