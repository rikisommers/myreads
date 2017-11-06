import React, { Component } from 'react';
//import { Route } from 'react-router-dom'
import BookshelfChanger from './BookshelfChanger'



class Book extends Component{
    render(){
    //const { book } = this.props 
    //console.log(this.props.thumb.smallThumbnail)
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
                    <BookshelfChanger/>
                
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.subtitle}</div>
            </div>
            </li>
        )
    }
}

export default Book