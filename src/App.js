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
    read:[],
    lib:[]
  }

 


  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {


    BooksAPI.getAll().then((books) => {

      this.setState({
        books:books,
        currentyReading:books.filter(book => book.shelf === "currentlyReading"),
        wantToRead:books.filter(book => book.shelf === "wantToRead"),
        read:books.filter(book => book.shelf === "read")
      })

      //get cat -- reduce doubles
      books.map((book,shelf) => { 
        this.setState(state => {
          state.cats.push({cat:book.shelf,id:book.id})
        })
      })



    })
  }



  changeShelf = (id,shelf) => {
    BooksAPI.update().then((books) => {
        console.log(this.props)
    })      
  }





  render() {


  const {books, cats} = this.state
  //console.log(cat)

  return (

      <div className="App">

        {/* <Route exact path='/search' component={SearchBooks} /> */}
        <Route exact path='/search' render={() =>(
            <SearchBooks
              books = { books }              
              cats = { cats }
              
            />
        )}/>

        <Route exact path='/' render={() =>(
            <ListBooks
              books = { books }
              cats = { cats }
            />
        )}/>


      </div>
      );
  }
}

export default BooksApp;
