import React from "react";
import "./navbar.css";
import logo from "../../assets/icone-blog-et-blogger-bleu.png";
import { Link, useLocation } from "react-router-dom";
import { useBusquedaNavbar } from "../../shared/hook/useBusquedaNavbar.jsx";

const Navbar = () => {
  const location = useLocation();
  const { handleBuscarCurso, handleBuscarPublicacion } = useBusquedaNavbar();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" width="24" height="24" />
        <span>NeuroCode</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Curso
          </Link>
        </li>
        <li>
          <Link
            to="/publicaciones/todas"
            className={location.pathname.includes("/publicaciones") ? "active" : ""}
          >
            Publicaciones
          </Link>
        </li>
      </ul>

      <div className="navbar-search">
        {location.pathname.includes("/publicaciones") && (
          <input
            type="text"
            placeholder="Buscar publicación..."
            onChange={handleBuscarPublicacion}
            className="input-publicacion"
          />
        )}

        {(location.pathname === "/" ||
          (location.pathname.includes("/curso") &&
            !location.pathname.includes("/publicaciones"))) && (
          <input
            type="text"
            placeholder="Buscar curso..."
            onChange={handleBuscarCurso}
            className="input-curso"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
