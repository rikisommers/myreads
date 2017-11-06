// Core
import React, { Component } from 'react';
// Plugins
//import { Route } from 'react-router-dom'
// Components
import Book from './Book'


class Bookshelf extends Component{


    render(){
    const { books, sName, sCat } = this.props 
   

    let thisShelf = books.filter((book) => book.shelf === sCat)
    

        return( 
            <div className="bookshelf">
              <h2 className="bookshelf-title">{sName}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {thisShelf.map(book => (
                    <Book
                      key={book.id}
                      id={book.id}
                      title={book.title}
                      subtitle={book.subtitle}
                      //authors={book.authors}
                      thumb={book.imageLinks}
                      shelf={book.shelf}
                    />  

                  ))}

                </ol>
              </div>
          </div>
        )
    }
}

export default Bookshelf