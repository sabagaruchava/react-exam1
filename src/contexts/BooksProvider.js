import React, { useState, useEffect } from "react";


export const BooksContext = React.createContext(null);

function BooksProviderComponent({ children }) {
  const [bookList, setBookList] = useState([]);


  const addNewBook = (newBook) => {
    console.log(newBook);
    const newList = [...bookList, newBook];
    setBookList(newList);
  };

  BooksContext.displayName = "BooksContext";
  return (
    <BooksContext.Provider value={{ addNewBook, bookList, setBookList }}>
      {children}
    </BooksContext.Provider>
  );
}

export default BooksProviderComponent;
