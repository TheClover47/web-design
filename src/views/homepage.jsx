import React, { Component } from 'react';
import '../App.css';

class HomePage extends Component {
  render() {
    const { darkMode } = this.props;
    return (
      <>
        <section className={`hero ${darkMode ? 'dark' : ''}`}>
          <h1>Mans ceļš uz Latvijas Universitāti</h1>
          <p>Vieta, kur aizsākās mana programmētāja karjera.</p>
        </section>
        <section className={`section-source ${darkMode ? 'dark-mode' : ''}`}>
          <h2>Projekta Pirmkods</h2>
          <p>Projekta pirmkods pieejams manā privātajā GitHub repozitorijā.</p>
          <a href="https://github.com/TheClover47/web-design" className="cta-button">Apskatīt GitHub</a>
        </section>
        <section className={`section ${darkMode ? 'dark-mode' : ''}`}>
          <h2>Sazinies ar Mani</h2>
          <p>Sazinies ar mani ja ir kādi jautājumi vai vēlme sadarboties.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ri%C4%8Dards-%C4%81boli%C5%86%C5%A1-aizbalts-214814280/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/TheClover47" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
      </>
    );
  }
}

export default HomePage;
