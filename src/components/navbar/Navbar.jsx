import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/icone-blog-et-blogger-bleu.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" width="24" height="24" />
        <span>NeuroCode</span>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="#" className="active">
            Curso
          </Link>
        </li>
        <li>
          <Link to="#">Publicaciones</Link>
        </li>
      </ul>
    </nav>
  );
}
