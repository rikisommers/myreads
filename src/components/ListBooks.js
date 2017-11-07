import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
//import propTypes from 'prop-types'
//COMP
import Bookshelf from './Bookshelf'
import Bookshelves from './Bookshelves'


class ListBooks extends Component{

    render(){
    const { books, moveBook } = this.props

    // why cant i map this from props??

    const categories = [{cat:'currentlyReading', name:'currently reading'},{cat:'wantToRead', name:'want to read'},{cat:'read', name:'read'}]


        
        return(
        <div className="list-books">

            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">

                
                {categories.map((item, index) => {
                    // place books in each category
                    const booksInShelf= books.filter((book) => book.shelf === item.cat)

                    return(
                    //<p key={item.index} >{item.name}</p>

                        <Bookshelf 
                        key={ item.index } 
                        booksInShelf={ booksInShelf}
                        name={ item.name }
                        cat={ item.cat }
                        moveBook="{ moveBook }"
                        />

                    )

                })}

                {/* 
                
                static version

                    <Bookshelf 
                    books={ books }
                    name='currentlyReading'
                    cat='currentlyReading'
                    onUpdate={onUpdate}
                    />
                    <Bookshelf 
                    books={ books }
                    name='wantToRead'
                    cat='wantToRead'
                    onUpdate={onUpdate}
                    />
                    <Bookshelf 
                    books={ books }
                    name='read'
                    cat='read'
                    onUpdate={onUpdate}
                    />
                
                */}


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