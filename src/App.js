import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css';


class BooksApp extends Component {

    state = {
      books:[],
      results:[],
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

    //.sort(sortBy('title'));
    findBook = (books, book) => (
      books.find((b) => (b.id === book.id))
    )

    rmFromResults = (bookId) => {
      const res = this.state.results.filter(
        book => book.id !== bookId
      )
      this.setState({ results: res })
    }

    moveBook = (bookMoving, toShelf) => {
      BooksAPI.update(bookMoving, toShelf).then(() => (
        this.getBooks()
      ))
      this.rmFromResults(bookMoving.id)
      console.log('moved book & removed from results')
    }


    syncSearchAndShelvesItems = booksFromSearch => {
    const shelfBooksIds = this.state.books.map(book => book.id);
    let mergedBooks = [];

    if (Array.isArray(booksFromSearch)) {
      mergedBooks = booksFromSearch.map(searchedBook => {
        if (shelfBooksIds.includes(searchedBook.id)) {
          return this.state.books.find(shelfBook => shelfBook.id === searchedBook.id);
        } else {
          return searchedBook;
        }
      })
    }

    return mergedBooks;
    };


    // event onChange
    searchBooks = (query) => {


      this.setState({ query: query })
      
      if (query.length > 0){
        BooksAPI.search(query, 20).then((results) => {

          this.setState({ results: this.syncSearchAndShelvesItems(results) })

            // if(results.length > 0){

            //     let res = []
            //     res = results.map(b => {     
                    
            //         let match = this.state.books.find(book => (book.id === b.id ))
            //         if(match){
            //             b.shelf = match.shelf
            //             return b
            //         }else{
            //             return b
            //         }

            //     })
            //     this.setState({
            //       results:res
            //     })


            // }else{
            //   //this.setState({ results: []})
            //   console.log('no results')
            // }


        })

      }else{
        this.setState({ results:[]})
        
      }
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
      
              <Route exact path='/search' render={({history}) =>(
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