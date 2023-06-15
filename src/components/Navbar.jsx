import Cookies from "js-cookie";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const logoutHandler = () => {
    Cookies.remove("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-primary shadow rounded px-md-3 px-1 py-2 mt-3">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="https://i.postimg.cc/Nfb6DFdV/icon.png"
            alt="icon"
            style={{ width: 40, height: 40, borderRadius: 5 }}
          />
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
              {pathname != "/create" ? (
                <Link to="/create" className="nav-link text-white">
                  Create Account
                </Link>
              ) : (
                <Link to="/" className="nav-link text-white">
                  Dashboard
                </Link>
              )}
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
                Admin
              </a>
              <ul className="dropdown-menu shadow-sm">
                <li>
                  <button
                    onClick={logoutHandler}
                    className="dropdown-item"
                    href="#"
                  >
                    <div className="d-flex justify-content-between">
                      Log Out <i className="bi bi-box-arrow-in-right"></i>
                    </div>
                  </button>
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
