import AddBookForm from "../../components/forms/sign-in-form/add-book-form/AddBookForm";
import BookList from "../../components/list/book-list/";
import BooksProviderComponent from "../../contexts/BooksProvider";
import { withAuthProtected } from "../../hoc/withAuthProtected";

function BooksPage(props) {
  return (
    <BooksProviderComponent>
      <div className="row">
        <h2>Books Page</h2>
        <div className="col-4">
          <AddBookForm></AddBookForm>
        </div>
        <div className="d-flex col-8 flex-wrap">
          <BookList></BookList>
        </div>
      </div>
    </BooksProviderComponent>
  );
}

export default withAuthProtected(BooksPage);
