import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class HomePage extends Component {

  render() {
    return (
      <>
        <section className="hero">
          <h1>Mans ceļš uz Latvijas Universitāti</h1>
          <p>Vieta, kur aizsākās mana programmētāja karjera.</p>
          <button className="cta-button">Izpētīt ceļu</button>
        </section>
        <section className="features">
          <h2>Sadaļas</h2>
          <div className="feature-cards">
            <div className="feature-card">
              <h3>Darbs</h3>
              <p>Ceļš no darba līdz Latvijas Universitātei</p>
            </div>
            <div className="feature-card">
              <h3>Mājas</h3>
              <p>Ceļš no mājām līdz Latvijas Universitātei</p>
            </div>
            <div className="feature-card">
              <h3>Skola</h3>
              <p>Ceļš no skolas līdz Latvijas Universitātei</p>
            </div>
          </div>
        </section>
        <section className="about">
          <h2>Par mani</h2>
          <p>Esmu Ričards Āboliņš-Aizbalts, 3. gada datorzinātņu students Latvijas universitātē. Šī mājaslapa tika izveidota kursa "Tīmekļa dizaina pamati" ietvaros.</p>
        </section>
      </>
    );
  }
}

export default HomePage;
