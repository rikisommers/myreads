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
    books:[],
    cats:[],
    currentyReading:[],
    wantToRead:[],
    read:[]
  }

 


  componentDidMount() {
    this.getBooks()
  }



  getBooks = () => {
    BooksAPI.getAll().then((books) => {

      this.setState({
        books:books
      })

    })
  }



  moveBook = (book,toShelf) => {
    console.log("changing shelves")
    console.log(book)
    console.log(toShelf)
    
    let books = this.state.books
    
    console.log(books)
    
    // get books[] without book
    // let shelf = books.filter((b) => b.shelf === book.shelf).filter((b) => b.id !== book.id)
    //book.shelf = toShelf

    // concat book toShelf
    // let destShelf = books.filter((b) => b.shelf === book.shelf).concat(book)
    // console.log(destShelf)

  // ALT MOVE BOOKS 

  //   moveBook = (book,toShelf) => {
  //     console.log("Moving book to shelf")
  //     BooksApi.update(book,toShelf).then(this.updateBookList())
  // }


  // updateBookList = () => {
  //     console.log("Getting all books")
  //     BooksApi.getAll().then((books)=>{
  //         console.log("Receiving promise - The books are")
  //         console.log(books)
  //         this.setState({
  //             booksReading: books.filter(book=>(book.shelf==="currentlyReading")),
  //             booksToRead: books.filter(book=>(book.shelf==="wantToRead")),
  //             booksRead: books.filter(book=>(book.shelf==="read")),
  //         })}
  //     )
  // }


    BooksAPI.update(book,toShelf).then(books => {
      
      //book.shelf = toShelf

      // this.setState({
      //   books: this.state.books.map( b => {
      //     if(b.id===book.id){
      //       b.shelf=value
      //     }
      //     return b
      //   })
      // })

      let updatedBooks = books.filter((b) => b.id !== book.id).push(book)
      
      this.setState({
        books:updatedBooks
      })

    })


    // this.setState({
    //   books:updatedBooks
    // })


   
    
  }

  // this.setState({
  //   books: this.state.books.map( b => {
  //     if(b.id===book.id){
  //       b.shelf=value
  //     }
  //     return b
  //   })
  // })




  render() {
  const {books} = this.state


  return (
      <div className="App">
   
        <Route exact path='/search' render={() =>(
        <SearchBooks
        books = { books }              
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
