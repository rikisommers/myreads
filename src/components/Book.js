// Core
import React, { Component } from 'react'
import ShelfSwitch from './ShelfSwitch'

class Book extends Component{
    
    render(){
    const { book, moveBook } = this.props;

    // check if book has imgURL else use placeholder
    let URL = 'http://via.placeholder.com/200x300';
    if(book.imageLinks && book.imageLinks.thumbnail){
        URL = book.imageLinks.thumbnail;
    }
    
    return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" 
                        style={{ 
                            width: 128,
                            height: 193,
                            backgroundImage:`url(${ URL })`
                        }}>
                    </div>
                    <ShelfSwitch
                        book = { book }
                        moveBook = { moveBook }
                    />
                </div>
                <div className="book-title">{ book.title }</div>
                <div className="book-authors">{ book.authors }</div>
                
                {book.shelf && ( 
                <h5 className="book-shelf">{ book.shelf }</h5> 
                )}
            
            </div>
        )
    }
}

export default Book