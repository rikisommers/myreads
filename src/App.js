import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'


class BooksApp extends Component {
// TODO: use constructor
    state = {
      books:[],
      results:[],
      categories: [],
      searchErr: false,
      query:''
    }

    componentDidMount() {
      this.getBooks();
    }

    getBooks = () => {
      BooksAPI.getAll().then((books) => {
        this.setState({
          books:books
        })
      })
    }

    findBook = (books, book) => (
      books.find((b) => (b.id === book.id))
    )
    
    moveBook = (bookMoving, toShelf) => {

      // TODO: add notifications
      let message = bookMoving.title + ' moving to ' + toShelf

      BooksAPI.update(bookMoving, toShelf).then(() => (
        this.getBooks()
      ))
      
      this.rmvFromResults(bookMoving, toShelf)
      // TODO : find a way to test if on search view
      // if(this.state.results){
      //   console.log(this.state.props)
      //   this.refreshResults(bookMoving, toShelf)
      // }else{
      //   console.log(this.state.results)
      // }
      
      
    }

    // TODO : remove merge from search
    searchBooks = (query) => {
      this.setState({ query: query })
      
      if (query.length > 0){
        BooksAPI.search(query, 20).then((results) => {

            
            if(results.length > 0){

                let res = []
                res = results.map(b => {     
                    
                    // merge books-in-myReads.shelf into results
                    let match = this.state.books.find(book => (book.id === b.id ))
                    if(match){
                        b.shelf = match.shelf
                        return b
                    }else{
                        return b
                    }

                })
                this.setState({
                  results:res
                })


            }else{
              this.clearResults()
            }
           
        })

      }else{        
        this.clearResults()        
      }
    }


    // RESULTS HELPERS
    rmvFromResults = bookId => {
      const resultsUpdate = this.state.results.filter(
        book => book.id !== bookId
      )
      this.setState({ results: resultsUpdate })
    }

    refreshResults(bookMoving, toShelf){
      this.setState(() => {
        var index = this.state.results.indexOf(bookMoving)
        this.state.results[index].shelf = toShelf
      })
    }

    clearResults = () => {
      this.setState({
          query:'',
          results:[]
      })
    }

    render() {
    const { books, results, query, searchErr} = this.state

        return (
            <div className="App">

              <Route exact path='/search' render={() =>(
                <SearchBooks
                  query = { query }      
                  results= { results }
                  searchErr= { searchErr }
                  searchBooks = { this.searchBooks }
                  moveBook = { this.moveBook }        
                />
              )}/>
              <Route exact path='/' render={() =>(
                  <ListBooks
                    books = { books }
                    moveBook = { this.moveBook }
                  />
              )}/>

            </div>
        )
    }
}
    

export default BooksApp;