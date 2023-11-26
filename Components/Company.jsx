// components/Company.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaUser, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';

export default function Company() {
  return (
    <div>
      <div>
        <button className="l-button">
          <FaEnvelope />
          Message
        </button>
        <button className="l-button">
          <FaUser />
          My account
        </button>
      </div>
      <div className="p-icons-container">
</div>   
      <div className="nav-container">
      <Link to="/home" className="nav-link">Home</Link>
      <Link to="/products" className="nav-link">Products</Link>
      <Link to="/company" className="nav-link">Company</Link>
      <Link to="/blog" className="nav-link">Blog</Link>
    </div>
      <img src="company.png" alt="Company Image" width="1100" height="500" />
    </div>
  );
}
