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

  //bonus -> bookshelf cannot add duplicate book
  addToBookShelf=(book)=>{
    if(!this.state.bookShelf.includes(book))
      {this.setState({
      bookShelf: [...this.state.bookShelf, book]
      })}
  }

  //filter bookShelf to get rid of the book we pass in as argument
    //setState of bookShelf to filteredBookShelf
  removeFromBookShelf=(book)=>{
    let filteredBookShelf = this.state.bookShelf.filter(b => {
      return b !==book
    })
    this.setState({
      bookShelf: filteredBookShelf
    })
  }

  //spread operator to add my book into books array
  addBook=(myBook)=>{
    this.setState({
      books: [...this.state.books, myBook]
    })
  }

  //not persisting
  // onSubmit=(e,book)=>{
  //   e.preventDefault()
  //   this.setState({
  //     books: [...this.state.books, book]
  //   })
  // }

  render() {
    console.log(this.state.books)
    return (
      <div className="book-container">
        <BookList books={this.state.books}
                  handleClick={this.addToBookShelf}
                  addBook={this.addBook} 
                  onSubmit={this.onSubmit}/>
        <Bookshelf books={this.state.books}
                  bookShelf={this.state.bookShelf}
                  handleClick={this.removeFromBookShelf}/>
      </div>
    );
  }
}

export default App;
