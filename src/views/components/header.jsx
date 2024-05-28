import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <nav className="navbar">
        <NavLink to="/" className="nav-link" activeclassname="active">Sākumlapa</NavLink>
        <NavLink to="/darbs" className="nav-link" activeclassname="active">Darbs</NavLink>
        <NavLink to="/majas" className="nav-link" activeclassname="active">Mājas</NavLink>
        <NavLink to="/skola" className="nav-link" activeclassname="active">Skola</NavLink>
        <button className="mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <><i className="fas fa-sun"></i> Gaišais Režīms</> : <><i className="fas fa-moon"></i> Tumšais Režīms</>}
        </button>
      </nav>
    </header>
  );
};

export default Header;
