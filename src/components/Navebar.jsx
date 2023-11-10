import React from 'react'
import { Link, NavLink } from "react-router-dom";

function Navebar(props) {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <a className="navbar-brand" href="/">
      ShoppingX
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-white"
            href="#"
            id="electronicsDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Electronics
          </a>
          <ul className="dropdown-menu" aria-labelledby="electronicsDropdown">
            <li>
              <a className="dropdown-item" href="">
                Mobile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Laptop
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-white"
            href="#"
            id="fashionDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Fashion
          </a>
          <ul className="dropdown-menu" aria-labelledby="fashionDropdown">
            <li>
              <a className="dropdown-item" href="#">
                Top Wear
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Bottom Wear
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-warning" type="submit">
          S
        </button>
      </form>
      <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown mx-2">
            <a
              className="nav-link dropdown-toggle text-white"
              href="#"
              id="profileDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sonam
            </a>
            <ul className="dropdown-menu" aria-labelledby="profileDropdown">
              <li>
                <a className="dropdown-item" href="">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="">
                  Orders
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="">
                  Change Password
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item mx-2">
            <Link to="/cart" className="nav-link text-white">
              <span className="badge bg-danger">{props.cartlen}</span> Cart
            </Link>
          </li>
          <li className="nav-item mx-2">
            <a href="" className="nav-link text-white">
              Login
            </a>
          </li>
          <li className="nav-item mx-2">
            <a href="" className="nav-link text-white">
              Registration
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

   
   
   </>
  )
}

export default Navebar