import React from 'react';
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf'

const ListBooks = (props) => {
//function ListBooks(props){
    const { books, moveBook, categories } = props;
    
    return (
        <div className="list-books">
        
            <div className="header">
                <h1>MyReads</h1>
                <div className="open-search">
                    <Link to='/search' className='add-contact'>Add a Book</Link>
                </div>
            </div>

            <div className="list-books-content">

                {categories.map((item, index) => {                    
                    const shelvedBooks = books.filter((book) => book.shelf === item.cat);
                    return(
                        <Bookshelf 
                        key={ index } 
                        books={ books }
                        shelvedBooks ={ shelvedBooks }
                        cat={ item.cat }
                        catName={ item.name }
                        moveBook={ moveBook }
                        />
                    )
                })}

            </div> 
        
        </div>
    )
}

// class ListBooks extends Component{

//     render(){
//     const { books, moveBook, categories } = this.props;
     
//         return(
        
//         )
//     }
// }

export default ListBooks