import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import Book from './Book'


class Bookshelf extends Component{
    render(){
    const { books, shelfList } = this.props 

    console.log({ shelfList })

    // books.map((book) => (
    //   this.setState(state => {
    //     state.shelfMap.push({ id: book.id, shelf: book.shelf })
    //   })
    // ))
    

    console.log( books )
        return( 
            <div className="bookshelf">
              <h2 className="bookshelf-title">shelf</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {/* loop books */}

                  {books.map(book => (
                    //<p key={book.id}>{book.title}</p>
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