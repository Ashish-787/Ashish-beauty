import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 py-3">
      <div className="container-fluid">

        {/* Logo */}
        <NavLink className="navbar-brand royal-logo" to="/">
          Royal-Beauty
        </NavLink>

        {/* ✅ Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* ✅ Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto gap-lg-3 text-center">

            
              <NavLink to="/"  className={({ isActive }) =>
                isActive ? "nav-btn nav-link active" : "nav-btn nav-link"
              }>
                Home
              </NavLink>
          

          <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "nav-btn nav-link active" : "nav-btn nav-link"
              }
            >
              Services
            </NavLink>

            
              <NavLink to="/offers"  className={({ isActive }) =>
                isActive ? "nav-btn nav-link active" : "nav-btn nav-link"
              }>
                Offers / Packages
              </NavLink>
          

            
              <NavLink to="/about"  className={({ isActive }) =>
                isActive ? "nav-btn nav-link active" : "nav-btn nav-link"
              }>
                About
              </NavLink>
          

            
              <NavLink to="/blog"  className={({ isActive }) =>
                isActive ? "nav-btn nav-link active" : "nav-btn nav-link"
              }>
                Blog
              </NavLink>
          

            
              <NavLink to="/contact"  className={({ isActive }) =>
                isActive ? "nav-btn nav-link active" : "nav-btn nav-link"
              }>
                Contact
              </NavLink>
          

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Header;
