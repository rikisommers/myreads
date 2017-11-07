// Core
import React, { Component } from 'react';
// Plugins
import propTypes from 'prop-types'
// Components
import Book from './Book'


class Bookshelf extends Component{


  // key={ item.index } 
  // books={ booksInCat }
  // name={ item.name }
  // cat={ item.cat }
  // onUpdate={onUpdate}




    render(){
    const { booksInShelf,name,cat,moveBook} = this.props 

    console.log( this.props )



  

    

        return( 
            <div className="bookshelf">
              <h2 className="bookshelf-title">{ name }</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  {booksInShelf.map(book => (
                    <Book
                      key={ book.id }
                      id={ book.id }
                      title={ book.title }
                      subtitle={ book.subtitle }
                      //authors={book.authors}
                      thumb={ book.imageLinks }
                      shelf={ book.shelf }
                      moveBook={ moveBook }
                    />  
                  ))}

                </ol>
              </div>
          </div>
        )
    }
}

export default Bookshelf