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
    const { books, moveBook } = this.props 
    //console.log( this.props )
        
        return(
            <li 
            key={ this.props.id }
            >
            <div className="book">
                <div className="book-top">
                <div 
                    className="book-cover" 
                    style={{ width: 128, height: 193 }}></div>
                
                    <img src={this.props.thumb.smallThumbnail} alt={this.props.thumb.title}/>
                    
                    {/* 
                    too much nesting?
                    */}
                    
                    <ShelfSwitch
                        books = { books }
                        book = { this.props.id }
                        moveBook = { moveBook  }
                    />
                
                    {/* <div className="book-shelf-changer">
                
                        <select
                        //defualtvalue={ currShelf }
                       // onChange={(e) => changeShelf(book, e.target.value)}
                        >
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>

                    </div> */}



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