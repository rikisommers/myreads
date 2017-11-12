// Core
import React, { Component } from 'react';


class ShelfSwitch extends Component{

    render(){
    const { book, moveBook } = this.props 
        // try setting in state
        let cShelf = 'none'
        // TODO :: loop all shelves set active
        this.props.book.shelf ? cShelf = this.props.book.shelf : cShelf = 'none'

        return(
            <div className="book-shelf-changer">
                <select
                value={cShelf}
                onChange={(event) => moveBook(book, event.target.value)}
                >
                    <option disabled>Move to...</option>
                    <option value="none">None</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>

                </select>
            </div>
        )
    }
}

export default ShelfSwitch