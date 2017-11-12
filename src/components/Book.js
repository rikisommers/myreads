// Core
import React, { Component } from 'react';
// Plugins
import propTypes from 'prop-types'
// Components
import ShelfSwitch from './ShelfSwitch'



class Book extends Component{
    
    static propTypes = {
        book: propTypes.object.isRequired,
        moveBook: propTypes.func.isRequired
    }

    render(){
    const { book, moveBook } = this.props 
    //console.log(book)
    //console.log(books)
    return(
            <div className="book">
                <div className="book-top">
                <div 
                    className="book-cover" 
                    style={{ width: 128, height: 193 }}></div>
            
                    <ShelfSwitch
                        book = { book }
                        moveBook = { moveBook }
                    />

                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ book.subtitle }</div>
                {
                book.shelf ? 
                <div className="book-authors">{ book.shelf }</div> 
                : "not on a shelf dog"
                }
                
            </div>
        )
    }
}

export default Book