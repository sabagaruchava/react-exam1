import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

import HomePage from "./pages/home-page/home-page";
import AuthPage from "./pages/auth";
import BooksPage from "./pages/books-page";

import Navigation from "./components/navigation/navigation";

import "./App.css";
import AddressPage from "./pages/address-page/address-page";

function App() {
  return (
    <div className="container mt-5">
      <Navigation></Navigation>
      <Switch>
        <Route path="/profile">
          <HomePage></HomePage>
        </Route>

        <Route path="/books">
          <BooksPage></BooksPage>
        </Route>

        <Route path="/addresses">
          <AddressPage></AddressPage>
        </Route>

        <Route path="/">
          <AuthPage></AuthPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
