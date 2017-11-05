// Core
import React, { Component } from 'react';

// Plugins
import { Route } from 'react-router-dom'

// Components
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

// API
import * as BooksAPI from './BooksAPI'

// Styling
//import logo from './logo.svg';
import './App.css';




class BooksApp extends Component {



  state = {
    //screen: 'search' // search
    books:[],
    shelfList:[]
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      
      this.setState({
        books,
        loading: false
      })

      books.map((book) => { 
        this.setState(state => {
          state.shelfList.push(book.shelf)
          //console.log(book.shelf)
        })
      })

    })
  }

  

//  const { books } = this.props
  

  // state = {
  //     showSearchPage: false
  // }

     /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

     // <Route exact path ='/' render={() =>(
    //   <ListContacts 
    //       onDeleteContact={this.removeContact} 
    //       contacts={this.state.contacts}
          
    //   />
    // )}/>

  render() {
  // Here: --> const { books } = this.state
  // In children: --> const { books } = this.props
  
  return (
      <div className="App">
       
  

        {/* {this.state.screen === 'list' && (
          <ListBooks/>
        )}

        {this.state.screen === 'search' && (
          <SearchBooks/>
        )} */}

        
        {/* 
        Use render if you need to pass props
        <Route exact path = '/' render={() => (
        <ListBooks/>
        )}
        />
        <Route exact path = '/search' render={( {history} ) => (
        <ListBooks/>
        )}
        /> */}

        <Route exact path='/search' component={SearchBooks} />

        <Route exact path='/' render={() =>(
            <ListBooks
              books = { this.state.books }
              
            />
        )}
         />


      </div>
      );
  }
}

export default BooksApp;
