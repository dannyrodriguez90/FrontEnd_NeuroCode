import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/navbar.png";
import { Link, useLocation } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { searchOutline, homeOutline, bookOutline } from "ionicons/icons";

const Navbar = () => {
  const location = useLocation();
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleSearchInput = (e) => {
    const eventName = location.pathname.includes("/publicaciones")
      ? "buscar-publicacion"
      : "buscar-curso";

    const event = new CustomEvent(eventName, {
      detail: e.target.value,
    });
    window.dispatchEvent(event);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            <IonIcon icon={homeOutline} />
            <span className="link-text">Curso</span>
          </Link>
        </li>
        <li>
          <Link
            to="/publicaciones/todas"
            className={location.pathname.includes("/publicaciones") ? "active" : ""}
          >
            <IonIcon icon={bookOutline} />
            <span className="link-text">Publicaciones</span>
          </Link>
        </li>
        <li className="navbar-search">
          <button className="search-button" onClick={handleSearchClick}>
            <IonIcon icon={searchOutline} />
          </button>
          {showSearch && (
            <input
              type="text"
              placeholder="Buscar..."
              className="search-input"
              onChange={handleSearchInput}
            />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;