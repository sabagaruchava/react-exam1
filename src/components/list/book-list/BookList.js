import { useContext } from "react";
import { BooksContext } from "../../../contexts/BooksProvider";

import BookListItem from "./BookListItem";

import "./book-list.css";

function BookList(props) {
  const { bookList } = useContext(BooksContext);
  return (
    <>
      {bookList.map((item) => {
        return <BookListItem item={item} key={item.id}></BookListItem>;
      })}
    </>
  );
}
export default BookList;
