// components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaUser, FaShoppingBag, FaShoppingCart } from 'react-icons/fa';

export default function Home() {
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
      <div className="icon-container">
        <FaShoppingBag />
        <FaShoppingCart />
      </div>
      <nav>
        <Link to="/Home">Home   |</Link>
        <Link to="/company">Company   |</Link>
        <Link to="/blog">Blog |</Link>
        <Link to="/">Log out |</Link>
      </nav>
      <img src="logo.png" className="logo-image" />
      <img src="huhu.png" className="huhu-image" />
      <br />
      <br />
      <br />
      <img src="home.png" alt="Product Logo" className="home-image" />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      <div className="button-container">
      <button>
        <img src="Shirt.png" alt="Shirt Icon" />
        Shirts and Shorts
      </button>
      <button>
        <img src="Dress.png" alt="Dress Icon" />
        Dress
      </button>
      <button>
        <img src="Pants.png" alt="Pants Icon" />
        Pants
      </button>
      <button>
        <img src="bags.png" alt="Bag Icon" />
        Bags
      </button>
      <button>
        <img src="OIP.jpg" alt="Shoe Icon" />
        Shoes
      </button>
    </div>

    </div>
  );
}
