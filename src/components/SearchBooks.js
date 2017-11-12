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
        query:'',
        books:[],
        results:[],
        error : false

    }

    clearResults = () => {
        this.setState({
            query:'',
            results:[]
        })
    }

    // event onChange
    searchBooks = (query) => {
     

        //this.props.book.shelf ? cShelf = this.props.book.shelf : cShelf = 'none'
        //loop trough if book is in lib update shelf or ..
          
        this.setState({ query: query })

        if (query){
            
            BooksAPI.search(query, 20).then((searchResults) => {
                                      
                    if(searchResults.length > 0){

                        let res = []
                        res = searchResults.map(b => {     
                            
                            console.log(b)
                            
                            let match = this.props.books.find(book => (book.id === b.id ))
                            if(match){
                                b.shelf = match.shelf
                                return b
                            }
                            return b
    
                        })

                        this.setState({
                        results:res,
                        error:false
                        })

                    }else{
                        this.setState({
                            results:[],
                            error:true
                        })
                    }
                    //searchResults.length > 0 ? this.setState() : this.setState({results:[]})
                    
            })
            
        }else{
            this.setState({
                results:[],
                error:false
            })
            console.log('empty query')
        }
        
    }



    
render() {
    const {results, query, error}  = this.state
    const {books, moveBook} = this.props

        return(
        
            <div className="search-books">

                <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">

                    <input type="text" 
                        placeholder='search books'
                        value={ query }
                        onChange={
                            (e) => this.searchBooks(e.target.value)
                        }
                    />
            
                    </div>
                </div>
                
                { results.length > 0 && (
                    <div className="search-books-results">

                        <h2><em>{ query }</em> returned { results.length } results</h2>
                    
                        <ol className="books-grid">
                            
                            {results.map((book) => (
                                <li key={ book.id }>
                                    <Book
                                    book={ book }
                                    books={ books }
                                    moveBook={ moveBook }
                                    /> 
                            </li>
                            ))}

                        </ol>
                    </div>
                )}
                { error === true && (
                    <div className="search-books-results">

                        <h2>no results</h2>
                    
                    </div>
                )}
                
                   
        </div>
        )

    }


}
export default SearchBooks
