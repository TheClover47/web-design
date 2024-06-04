import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  toggleMenu() {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  }

  closeMenu() {
    this.setState({
      menuOpen: false,
    });
  }

  render() {
    const { darkMode, toggleDarkMode } = this.props;
    const { menuOpen } = this.state;

    return (
      <header className="header">
        <nav className="navbar">
          <div className="menu-toggle" onClick={this.toggleMenu}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <NavLink to="/" className="nav-link" activeclassname="active" onClick={this.closeMenu}>Sākumlapa</NavLink>
            <NavLink to="/par-mani" className="nav-link" activeclassname="active" onClick={this.closeMenu}>Par Mani</NavLink>
            <NavLink to="/darbs" className="nav-link" activeclassname="active" onClick={this.closeMenu}>Darbs</NavLink>
            <NavLink to="/majas" className="nav-link" activeclassname="active" onClick={this.closeMenu}>Mājas</NavLink>
            <NavLink to="/skola" className="nav-link" activeclassname="active" onClick={this.closeMenu}>Skola</NavLink>
            <NavLink to="/programmesana" className="nav-link" activeclassname="active" onClick={this.closeMenu}>Programmēšana</NavLink>
            <button className="mode-toggle" onClick={toggleDarkMode}>
              {darkMode ? <><i className="fas fa-sun"></i> Gaišais Režīms</> : <><i className="fas fa-moon"></i> Tumšais Režīms</>}
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
