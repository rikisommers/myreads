import React, { Component } from 'react';
//import { Route } from 'react-router-dom'

class BookshelfChanger extends Component{
    render(){
        return(
            <div className="book-shelf-changer">
                
                <select
                defualtvalue=""
                onChange={(e) => this.changeShelf(e.target.value)}
                >
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>

            </div>
        )
    }
}

export default BookshelfChanger