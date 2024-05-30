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
    const {darkMode} = this.state;
    return (
      <Router>
        <div className='appContainer'>
        <Header darkMode={darkMode} toggleDarkMode={this.toggleDarkMode}/>
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/par-mani" element={<AboutMe/>} />
            <Route path="/darbs" element={<Darbs/>} />
            <Route path="/majas" element={<Majas/>} />
            <Route path="/skola" element={<Skola/>}/>
          </Routes>
        </div>
        <Footer/>
        </div>
    </Router>
    );
  }
}

export default App;
