import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input';
import Book from './Book'

class SearchBooks extends Component{

    render() {
        
        const { query, results, moveBook, searchBooks } = this.props

        return(
        
            <div className="search-books">

                <div className="search-books-bar">
                    
                    <Link to="/" className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">

                        {/* <input type="text" 
                            placeholder='search books'
                            value={ query }
                            onChange={
                                (e) => searchBooks(e.target.value)
                            }
                        /> */}

                        <DebounceInput
                        placeholder='search books'
                        minLength={1}
                        value={ query }
                        debounceTimeout={300}
                        onChange={
                            (e) => searchBooks(e.target.value)
                        }
                        />

            
                    </div>
                </div>
                

       
                    <div className="search-books-results">
           
       
                        

                        {console.log(results)}

                        { results.length > 0 && (
                            <div>
                            
                                <h1>test</h1>
                                <ol className="books-grid">

                                    {results.map(book => (
                                        <li key={ book.id }>
                                            <Book
                                            book={ book }
                                            moveBook={ moveBook }
                                            /> 
                                    </li>
                                    ))}

                                </ol>
                            </div>
                        )}

                        {/* {noResults ? <h3>No results found</h3> : (
                        )} */}



                    </div>


            </div>
        )

    }
    

}
export default SearchBooks
