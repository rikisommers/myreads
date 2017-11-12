// Core
import React, { Component } from 'react';

// Plugins
import { Route } from 'react-router-dom'

// Components
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'

// API
import * as BooksAPI from './utils/BooksAPI'

// Styling
//import logo from './logo.svg';
import './App.css';




class BooksApp extends Component {



  state = {
    books:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books:books
      })
    })
  }


//return book in books  
findBook = (books, book) => (
  books.find((b) => (b.id === book.id))
)

moveBook = (bookMoving, toShelf) => (
    
  BooksAPI.update(bookMoving, toShelf).then(() => (
    
    this.setState(state => {

      let books = state.books
      console.log("changing shelves to:" + toShelf)  

      let bookToMove = this.findBook(books,bookMoving)
      // if book found in lib , which it always wil be
      if(bookToMove){
      
          if(toShelf === 'none'){
            // if removing from lib return books - book
            books = books.filter(b => b.id === bookToMove.id)
            
          }else{
            // find matching book and update shelf
            books = books.map((b) => {    
              if(b.id === bookToMove.id){
                b.shelf = toShelf
              }
              return b
            })

          }
    
      }else{
          //
          books = books.concat(bookToMove)
      }
    
      return { books:books }

    })
    
  ))

)














render() {
  const { books } = this.state


    return (
        <div className="App">
    
          <Route exact path='/search' render={({history}) =>(
            <SearchBooks
              books = { books }      
              results = { books }
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
        );
    }
}

export default BooksApp;
