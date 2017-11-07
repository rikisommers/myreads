// Core
import React, { Component } from 'react';

// Plugins
import { Route } from 'react-router-dom'

// Components
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

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

    BooksAPI.update(book,toShelf).then(books => {
      this.setState({
        books:books
      })
    })
    


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

        {/* <Route exact path='/search' component={SearchBooks} /> */}
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
