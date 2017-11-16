import React from 'react';
import Book from './Book'

const Bookshelf = (props) => {
//function Bookshelf(props){


    const { shelvedBooks,catName,moveBook} = props;
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

export default Bookshelf