import React, { Component } from 'react';
import Book from './Book'

class Bookshelf extends Component{

    render(){
    const { shelvedBooks,catName,moveBook} = this.props 
        return( 
            <div className="bookshelf">
              <h3 className="bookshelf-title">{ catName }</h3>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {shelvedBooks.map(book => (
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