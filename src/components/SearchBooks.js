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


        if (query === '' || query === undefined){
            this.setState({ results: [] });
            console.log("no pass")
            return;
        }else{
        
            BooksAPI.search(query, 20).then((books) => {
                this.setState({results:books})
//                          console.log(this)
                          // if()
                          // books === Array ? (
                          //     
              
                          // ) : (
                          //     this.setState({results:[]})
                          // )
              
                         // console.log(results)
                          
                          // if(books.length > 0){
              
                          // }else{
                              
                          // }
              
              
                      })

        }
        

    }





    
    render (){
    const {results}  = this.state
    const query = this.state.query

        console.log(results)
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
        

  

            {results.length > 0 ? (

                <div className="search-books-results">

                <h2>Search for {this.state.query} returned {results.length} results</h2>
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

            ):(

                <div className="search-books-results">
                    <h2>Search for {this.state.query} returned 0 results</h2>        
                </div>
            )}

           
        

            {/* {this.state.query !== '' &&()
            } */}

        </div>
        )

    }
}


export default SearchBooks
