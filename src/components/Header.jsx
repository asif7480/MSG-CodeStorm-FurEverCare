import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import navbarLinks from "../data/links.json"
import './Header.css';
import { useAuth } from '../contexts/AuthContext';

function Header() {
  const category = window.localStorage.getItem("category") || "owner";
  const username = window.localStorage.getItem("name") || "Guest";

  const navigate = useNavigate();
  const { leave } = useAuth();

  const { owner, shelter, veterinarian } = navbarLinks;

  let navItems = [];
  if (category === "owner") {
    navItems = owner;
  } else if (category === "shelter") {
    navItems = shelter;
  } else if (category === "veterinarian") {
    navItems = veterinarian;
  }

  const handleLeave = () => {
    leave();
    navigate('/');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
        <div className="container">
          <Link className="navbar-brand" to={`/${category}`}>
            <i className="fas fa-paw" /> FurEver Care
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <Link className="nav-link" to={item.path}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="nav-item me-1">
                <span className="nav-link fw-semibold" style={{ backgroundColor: "#ff6b6b", color: "white", padding: "5px 15px", borderRadius: "5px" }}>
                  {username}
                </span>
              </li>

              <li className="nav-item me-1" >
                <span onClick={handleLeave} className="nav-link fw-semibold" style={{ backgroundColor: "#ff6b6b", color: "white", padding: "5px 15px", borderRadius: "5px" }}>
                  Leave
                </span>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header;
