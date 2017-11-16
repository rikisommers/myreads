// Core
import React from 'react';

const ShelfSwitch = (props) => {
//function ShelfSwitch(props){
        
    const { book, moveBook } = props;
        
        // check if book has shelf else none -> set select value
        let cShelf = 'none'
        if(props.book.shelf){
            cShelf = props.book.shelf;
        }

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

export default ShelfSwitch