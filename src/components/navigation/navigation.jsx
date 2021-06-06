import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="row mt-2 mb-3">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>
            Authentication
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/books">
            Books
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/users">
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
