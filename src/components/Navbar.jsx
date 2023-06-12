import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" navbar ">
      <Link to="/">
        <h1 className=" navbar-brand">H Paradise</h1>
      </Link>

      <ul className="d-flex flex-row gap-3">
        <li>
          <Link to="/create">
            <button className="btn btn-link text-primary">
              Create Account
            </button>
          </Link>
        </li>
        <li>
          <button className="btn btn-link text-danger">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
