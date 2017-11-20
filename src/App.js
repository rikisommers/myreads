import React, { Component } from 'react'
import { Route } from 'react-router-dom'
//import Notifications, {notify} from 'react-notify-toast';
import ListBooks from './components/ListBooks'
import SearchBooks from './components/SearchBooks'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'


class BooksApp extends Component {
// TODO: use constructor, set propTypes
// TODO: uses books.error to handle search errors

    state = {
      books:[],
      results:[],
      categories: [{cat:'currentlyReading', name:'currently reading'},{cat:'wantToRead', name:'want to read'},{cat:'read', name:'read'}],
      query:''
    }
  
    componentDidMount() {
      this.getBooks();
    }

    getBooks = () => {
      BooksAPI.getAll().then((books) => {
        this.setState({
          books:books
        });
      });
    }

    findBook = (books, book) => {
      books.find((b) => (b.id === book.id));
    }
    
    moveBook = (bookMoving, toShelf) => {

      // TODO: add notifications
      let message = bookMoving.title + ' moving to ' + toShelf;
      console.log(message);

      // shoudn't need to refresh data from backend every time a book is updated.
      //BooksAPI.update(bookMoving, toShelf).then(() => {
        //this.getBooks();
      //});

      if(bookMoving.shelf !== toShelf){
        BooksAPI.update(bookMoving, toShelf).then(() => {
              
              // console.log(bookMosving.id)
              // Filter out the book and append it to the end of the list
              // so it appears at the end of whatever shelf it was added to.

              this.setState(state => ({
                books: state.books.filter(b => b.id !== bookMoving.id).concat([bookMoving])
              }));

        });
      }

      
      //notify.show(message);
      // TODO : find a way to refresh results (shelf) on search page only
      // this.updateResults(bookMoving, toShelf)
      
    };

    // TODO : remove merge from search and simplify
    searchBooks = (query) => {

      this.setState({ query: query });
      
      if (query.length > 0){
        BooksAPI.search(query, 20).then((results) => {

            
            if(results.length > 0){

                let res = []
                res = results.map((b) => {     
                    
                    // merge books-in-myReads.shelf into results
                    let match = this.state.books.find(book => (book.id === b.id ));
                    if(match){
                        b.shelf = match.shelf
                        return b
                    }else{
                        return b
                    }

                });

                this.setState({results:res});

            }else{
              this.clearResults();
            }
           
        })

      }else{        
        this.clearResults();      
      }
    }

    // RESULTS HELPERS
    // update bookMoving shelft title in results list
    upadteResults(bookMoving, toShelf){
      this.setState(state => {
        let index = state.results.indexOf(bookMoving)
        state.results[index].shelf = toShelf
      });
    }

    // reset results
    clearResults = () => {
      this.setState({
          query:'',
          results:[]
      });
    }

    render() {
    const { books, categories, results, query } = this.state

        // const data = [
        //     { name: 'Tyler', favoriteIceCreams: ['Strawberry', 'Vanilla', 'Chocolate', 'Cookies & Cream'] },
        //     { name: 'Richard', favoriteIceCreams: ['Cookies & Cream', 'Mint Chocolate Chip', 'Chocolate', 'Vanilla'] },
        //     { name: 'Amanda', favoriteIceCreams: ['Chocolate', 'Rocky Road', 'Pistachio', 'Banana'] },
        //     { name: 'Andrew', favoriteIceCreams: ['Vanilla', 'Chocolate', 'Mint Chocolate Chip'] },
        //     { name: 'David', favoriteIceCreams: ['Vanilla', 'French Vanilla', 'Vanilla Bean', 'Strawberry'] },
        //     { name: 'Karl', favoriteIceCreams: ['Strawberry', 'Chocolate', 'Mint Chocolate Chip'] }
        // ];
        // const res2 = data.reduce(( t, i ) => {
        //       i.favoriteIceCreams.map((val) => {
        //         t[val] = (t[val] || 0) + 1;
        //       });
        //       return t;
        // },{});
        // console.log(res2);  
        

        return (

            <div className="App">
              <Route exact path='/search' render={() =>(
                <SearchBooks
                  query = { query }      
                  results= { results }

                  searchBooks = { this.searchBooks }
                  moveBook = { this.moveBook }        
                />
              )}/>
              <Route exact path='/' render={() =>(
                  <ListBooks
                    books = { books }
                    categories= { categories }
                    moveBook = { this.moveBook }
                  />
              )}/>

            </div>
        )
    }
}
    

export default BooksApp;