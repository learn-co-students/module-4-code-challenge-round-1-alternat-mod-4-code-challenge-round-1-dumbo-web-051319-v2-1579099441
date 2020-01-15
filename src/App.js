import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BookList from "./containers/BookList";
import Bookshelf from "./containers/Bookshelf";

class App extends Component {
  state={
    books: [],
    bookShelf: []
  }

  componentDidMount(){
    fetch('http://localhost:3005/books')
    .then(resp => resp.json())
    .then(books =>{
      this.setState({
        books: books
      })
    })
  }

  addToBookShelf=(book)=>{
    if(!this.state.bookShelf.includes(book))
      {this.setState({
      bookShelf: [...this.state.bookShelf, book]
      })}
  }

  removeFromBookShelf=(book)=>{
    let filteredBookShelf = this.state.bookShelf.filter(b => {
      return b !==book
    })
    this.setState({
      bookShelf: filteredBookShelf
    })
  }

  addBook=(myBook)=>{
    this.setState({
      books: [...this.state.books, myBook]
    })
  }

  render() {
    console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList books={this.state.books}
                  handleClick={this.addToBookShelf}
                  addBook={this.addBook} />
        <Bookshelf books={this.state.books}
                  bookShelf={this.state.bookShelf}
                  handleClick={this.removeFromBookShelf}/>
      </div>
    );
  }
}

export default App;
