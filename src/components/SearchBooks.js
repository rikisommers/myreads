// Core
import React, { Component } from 'react';
// Plugins
import { Link } from 'react-router-dom'
//import {PropTypes} from 'prop-types'
// Components
import Book from './Book'
// API
import * as BooksAPI from '../utils/BooksAPI'


class SearchBooks extends Component{
    
    
    state= {
        books:[],
        query:'',
        results:[]
    }



    // clearQuery = (query) => {
    //     this.setState({ query: ''})
    // }
    searchBooks = (value) => {

        // if (value.length !== 0){
        if (value){
            BooksAPI.search(value,20).then((books) => {
 

                    // set error state for 
                    // if results
                    
                    // else reset & add "no results" text         
              })
        }
    }

  





    // updateQuery = (event) => {
    //     const value = event.target.value.trim
    //     this.setState({ query: value })
    // //    this.getResults(value)
    // }



    // event onChange
    updateQuery = (query) => {
        let results = this.state
        this.setState({ query: query.trim() })
        console.log(query)

        //this.getResults(query)
        BooksAPI.search(query, 20).then((books) => {
  
            books.length > 0 ? this.setState({results:books}) : this.setState({results:[]})
            console.log(results)
        })

    }





    
    render (){
    const {results}  = this.state
    const query = this.state.query
        console.log(results.length)
        return(
        <div className="search-books">
        
            <div className="search-books-bar">
            <Link to="/" className="close-search">Close</Link>

        
                <div className="search-books-input-wrapper">

                  <input type="text" 
                    placeholder='search books'
                    value={query}
                    onChange={(e) => this.updateQuery(e.target.value)}
                  />
        
                </div>
            </div>
        

  

            {results.length > 0 && (

                <div className="search-books-results">
                <h1>{this.state.query}</h1>
                <h2>your search returned {results.length} results</h2>
                    <ol className="books-grid">
                        
                        {results.map(book => (
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

            )}

           
        

            {/* {this.state.query !== '' &&()
            } */}

        </div>
        )

    }
}


export default SearchBooks
