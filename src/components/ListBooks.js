import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
//import propTypes from 'prop-types'
//COMP
import Bookshelf from './Bookshelf'



class ListBooks extends Component{

    // static propTypes = {
    //     books: propTypes.array.isRequired,
    //     //onDeleteContact:propTypes.func.isRequired
    // }



    render(){
    const { books, shelfList } = this.props
        
    console.log( { shelfList } )
        
        return(
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            
            <div className="list-books-content">
                
                {/* replace with
                <div className="bookshelf">
                    <ol className="books-grid">

                */}

                <Bookshelf
                    books={ books }
                    shelfList={ shelfList }
                    // filter={ }
                />
                {/* <CurrentlyReading/>
                <WantToRead/>
                <Read/> */}


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