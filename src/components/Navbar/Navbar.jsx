import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      {/* Centers the navbar on the web page */}
      {/* ! how to center NavLink div */}
      {/* define NavLink div as NavLink fluid container */}
      <div className="container-fluid nav-bg">
        {/* insert rows into it */}
        <div className="row">
          {/* 10 out of 12 columns to ensure that the div is centered correctly  */}
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand" to="/">
                Yoga
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                {/* ! the newer version of bootstrap uses ms instead of ml */}
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                      {/* changed from anchor tag to navlink to make sure the page doesn't render while changing components */}
                    <NavLink exact className="nav-link" to="/">
                      Home <span className="sr-only"></span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link" to="/service">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link" to="/about">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink exact className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  {/* <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <NavLink className="dropdown-item" to="#">
                  Action
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  Another action
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink className="dropdown-item" to="#">
                  Something else here
                </NavLink>
              </div>
            </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
