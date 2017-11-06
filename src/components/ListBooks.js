import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
//import propTypes from 'prop-types'
//COMP
import Bookshelf from './Bookshelf'
import Bookshelves from './Bookshelves'


class ListBooks extends Component{

    render(){
    const {books,cats,onUpdate} = this.props
    //console.log(books)
    //console.log(cats)
    
        
        return(
        <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
                

                {/* test to create shelf for each category */}
                <Bookshelves
                    books={ books }
                    cats= { cats }
                    sName="cat"
                    sCat="cat"
                    onUpdate={onUpdate}
                />


                <Bookshelf
                    books={ books }
                    sName='Currently Reading'
                    sCat='currentlyReading'
                    onUpdate={onUpdate}
                />
                <Bookshelf
                    books={ books }
                    sName='Want To Read'
                    sCat='wantToRead'
                    onUpdate={onUpdate}
                />
                <Bookshelf
                    books={ books }
                    sName='Read'
                    sCat='read'
                    onUpdate={onUpdate}
                />
               

                

            </div> 
 

            <div className="open-search">
                

                <Link
                    to='/search'
                    //onClick={this.props.onNavigate}
                    className='add-contact'
                >Add a Book</Link>

            </div>

        </div>
        )
    }
}

export default ListBooks