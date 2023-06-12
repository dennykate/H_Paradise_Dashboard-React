import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary shadow rounded px-3 py-2 mt-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <h1 className="text-white h2 m-0 font-monospace">Blue Box</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <Link to="/create" className="nav-link text-white">
                Create Account
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-person-circle me-2 "></i>
                Name
              </a>
              <ul className="dropdown-menu shadow-sm">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex justify-content-between">
                      Log Out <i className="bi bi-box-arrow-in-right"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
