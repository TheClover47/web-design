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
        <Header darkMode={darkMode} toggleDarkMode={this.toggleDarkMode}/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/darbs" element={<Darbs/>} />
          <Route path="/majas" element={<Majas/>} />
          <Route path="/skola" element={<Skola/>}/>
        </Routes>
        <Footer/>
    </Router>
    );
  }
}

export default App;
