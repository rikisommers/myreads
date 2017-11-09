// Core
import React, { Component } from 'react';
// Plugins
import propTypes from 'prop-types'

class ShelfSwitch extends Component{
// todo: add static propTypes

    render(){
    const { books, book, moveBook } = this.props 
    // console.log( this.props.moveBook )
    

    
    let defualtShelf = 'none'
    let currShelf = book.shelf

    // for(let item of books){
    //     item.id === book.id
    // }

        return(
            <div className="book-shelf-changer">
                <p>{currShelf}</p>
                <select
                defualtvalue={ currShelf }
                onChange={(event) => moveBook(book, event.target.value)}
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

export default ShelfSwitch