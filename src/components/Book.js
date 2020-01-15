import React from "react";

const Book = props => {
  let {book} = props;
  return (
    <div onClick={() => props.handleClick(book)}>
      <h2>{book.title}</h2>
      <img src={book.img} alt={book.title}/>
    </div>
  );
};

export default Book;
