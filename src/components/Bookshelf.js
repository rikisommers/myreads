import React, { Component } from 'react';
import Book from './Book'

class Bookshelf extends Component{

    render(){
    const { booksInShelf,catName,moveBook} = this.props 
        return( 
            <div className="bookshelf">
              <h2 className="bookshelf-title">{ catName }</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {booksInShelf.map(book => (
                    <li key={ book.id }>
                      <Book
                        book={ book }
                        moveBook={ moveBook }
                      />  
                    </li>
                  ))}

                </ol>
              </div>
          </div>
        )
    }
    
}

export default Bookshelf