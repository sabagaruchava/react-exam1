import { useState, useContext } from "react";

import Button from "../../../ui/button/button";

import { BooksContext } from "../../../../contexts/BooksProvider";

function AddBookForm(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const { addNewBook } = useContext(BooksContext);

  const onSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      title,
      author,
      description,
      id: Math.random().toString(),
    };
    addNewBook(newBook);
  };

  return (
    <form className="row g-1" onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title - {title}
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder=""
          value={title}
          onChange={({ target }) => {
            setTitle(target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Author - {author}
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder=""
          value={author}
          onChange={({ target }) => {
            setAuthor(target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description - {description}
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          value={description}
          onChange={({ target }) => {
            setDescription(target.value);
          }}
        ></textarea>
      </div>
      <Button
        text="Add Book"
        type="submit"
        className="btn btn-primary btn-md"
      ></Button>
    </form>
  );
}

export default AddBookForm;
