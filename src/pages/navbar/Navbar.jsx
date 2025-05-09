import React from "react";
import "./navbar.css";
import logo from "../../assets/icone-blog-et-blogger-bleu.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleBuscar = (e) => {
    const event = new CustomEvent("buscar-curso", {
      detail: e.target.value,
    });
    window.dispatchEvent(event);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" width="24" height="24" />
        <span>NeuroCode</span>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/" className="active">Curso</Link>
        </li>
        <li>
          <Link to="/publicaciones">Publicaciones</Link>
        </li>
      </ul>

      <div className="navbar-search">
        <input
          type="text"
          placeholder="Buscar curso..."
          onChange={handleBuscar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
