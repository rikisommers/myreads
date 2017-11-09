// Core
import React, { Component } from 'react';
// Plugins
import propTypes from 'prop-types'
// Components
import ShelfSwitch from './ShelfSwitch'



class Book extends Component{
    
    // static propTypes = {
    // changeShelf: propTypes.func.isRequired
    // }

    render(){
    const { books,book, moveBook } = this.props 
    
    const imgURL = this.props.thumb.thumbnail  
//    console.log(this.props.thumbnail)

   // const {imgURL} = this
//   this.props.thumb.smallThumbnail
 //   this.props.thumb.title
 //   this.props.title
 //   this.props.subtitle
    
        return(
            <li 
            key={ this.props.id }
            >
            <div className="book">
                <div className="book-top">
                <div 
                    className="book-cover" 
                    style={{ width: 128, height: 193 }}></div>
                        
                        <img src={imgURL} alt={this.props.thumb.title}/>
    
                 
                    {/* <div className="book-shelf-changer">
                        <select
                        //defualtvalue={ currShelf }
                        onChange={(event) => moveBook(book, event.target.value)}
                        >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div> */}

                    <ShelfSwitch
                        //defualtvalue={ currShelf }
                        books = { this.props.books }
                        book = { this.props }
                        moveBook = { this.props.moveBook  }
                    />

                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.subtitle}</div>
                <div className="book-authors">{this.props.shelf}</div>
            </div>
            </li>
        )
    }
}

export default Book