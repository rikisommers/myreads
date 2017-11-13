import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Notification, { notify } from 'react-notify-toast';
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'


class BooksApp extends Component {

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
    
    refreshResults(book, shelf){
      this.setState(() => {
        var index = this.state.results.indexOf(book);
        this.state.results[index].shelf = shelf;
      });

    }

    moveBook = (bookMoving, toShelf) => {
         
      let message = bookMoving.title + ' moving to ' + toShelf

      BooksAPI.update(bookMoving, toShelf).then(() => (
        this.getBooks()
      ))

      if(this.state.results.length > 0 ){
        this.refreshResults(bookMoving, toShelf)
      }

      console.log(message)
    }

    // mergeBooks = booksFromSearch => {
    //   const shelfBooksIds = this.state.books.map(book => book.id);
    //   let mergedBooks = [];

    //   if (Array.isArray(booksFromSearch)) {
    //     mergedBooks = booksFromSearch.map(searchedBook => {
    //       if (shelfBooksIds.includes(searchedBook.id)) {
    //         return this.state.books.find(shelfBook => shelfBook.id === searchedBook.id);
    //       } else {
    //         return searchedBook;
    //       }
    //     })
    //   }

    //   return mergedBooks;
    // };

    searchBooks = (query) => {


      this.setState({ query: query })
      
      if (query.length > 0){
        BooksAPI.search(query, 20).then((results) => {


            if(results.length > 0){

                let res = []
                res = results.map(b => {     
                    
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
              this.setState({ results: []})
            }
           
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
              <Notification />
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