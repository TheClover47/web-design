import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
// import './App.css';
import HomePage from './views/homepage';
import Darbs from './views/darbs';
import Majas from './views/majas';
import Skola from './views/skola';
import Header from './views/components/header';
import Footer from './views/components/footer';
import AboutMe from './views/aboutme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  componentDidMount() {
    document.body.className = this.state.darkMode ? 'dark-mode' : 'light-mode';
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.darkMode !== this.state.darkMode) {
      document.body.className = this.state.darkMode ? 'dark-mode' : 'light-mode';
    }
  }

  toggleDarkMode() {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  }

  render() {
    const { darkMode } = this.state;
    return (
      <Router basename='/web-design'>
        <div className='appContainer'>
          <Header darkMode={darkMode} toggleDarkMode={this.toggleDarkMode} />
          <div className={`content ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <Routes>
              <Route path="/" element={<HomePage darkMode={darkMode} />} />
              <Route path="/par-mani" element={<AboutMe darkMode={darkMode} />} />
              <Route path="/darbs" element={<Darbs darkMode={darkMode} />} />
              <Route path="/majas" element={<Majas darkMode={darkMode} />} />
              <Route path="/skola" element={<Skola darkMode={darkMode} />} />
            </Routes>
          </div>
          <Footer darkMode={darkMode} />
        </div>
      </Router>
    );
  }
}

export default App;
