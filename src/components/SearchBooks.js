import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DebounceInput } from 'react-debounce-input'
import Book from './Book'

class SearchBooks extends Component{

    render() {    
    const { query, results, moveBook, searchBooks } = this.props;

        return(
            <div className="search-books">


                <div className="header search-books-bar">
                    
                    <Link to="/" className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">

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
                        
                    { results.length > 0 && (
                        <div>

                            <p className="search-query" >Search for: { query }</p>
                            <h5>{results.length} results found</h5>

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
                    <div>
                        <h5>0 results found</h5>
                    </div>

                </div>
            </div>
        )
    }
}
export default SearchBooks
