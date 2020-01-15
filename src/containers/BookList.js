import React, { Component } from "react";
import Book from "../components/Book";
import Form from "../components/Form";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book List</h1>
        <Form addBook={this.props.addBook}
              onSubmit={this.props.onSubmit}/>
        <ul>{ 
            this.props.books.map((book, indx )=>{
              return <Book 
                        key={indx}
                        book={book}
                        handleClick={this.props.handleClick}/>
            })
            }
          </ul>
      </div>
    );
  }
}

export default BookList;
