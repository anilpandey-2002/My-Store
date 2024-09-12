import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Navbar.css";

const Navbar = ({ onSearchChange }) => {
  const items = useSelector((state) => state.cart);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearchChange(term); // Pass the search term to the parent component
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">My-Store</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link className="navLink" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="cart-info">
        <Link className="navLink" to="/cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{items.length}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
