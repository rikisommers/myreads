// Core
import React, { Component } from 'react';
// Plugins
//import { Route } from 'react-router-dom'
// Components
import Bookshelf from './Bookshelf'


class Bookshelves extends Component{
  render(){
  const { books, cats} = this.props 
  
    return(
      
      <Bookshelf
      books={ books }
      cat={ cats }
      />

    )

    // let a = [ {name:'bob'}, {name:'bobj'}, {name:'bobw'} ]
    // let arrayOfJsx = a.map( item => <div key={item.cat} > I am { item.cat } </div> )
    // return(
    // arrayOfJsx
    // )}
    
  }
}

export default Bookshelves