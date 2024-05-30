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
          {/* <button className="cta-button">Izpētīt ceļu</button> */}
        </section>
        {/* <section className="features">
          <h2>Mājaslapas sadaļas</h2>
          <div className="feature-cards">
            <Link to="/par-mani" className="feature-card">
              <h3>Par Mani</h3>
              <p>Īsa autobiogrāfija par mani</p>
            </Link>
            <Link to="/majas" className="feature-card">
              <h3>Mājas</h3>
              <p>Ceļš no mājām līdz Latvijas Universitātei</p>
            </Link>
            <Link to="/skola" className="feature-card">
              <h3>Skola</h3>
              <p>Ceļš no skolas līdz Latvijas Universitātei</p>
            </Link>
            <Link to="/darbs" className="feature-card">
              <h3>Darbs</h3>
              <p>Ceļš no darba līdz Latvijas Universitātei</p>
            </Link>
            <Link className="feature-card">
              <h3>Programmēšana</h3>
              <p>Apraksts par manu programmēšanas ceļu</p>
            </Link>
            <Link className="feature-card">
              <h3>Drīzumā</h3>
              <p>Vēlviena apakšnodaļa par ceļu uz LU</p>
            </Link>
            <Link className="feature-card">
              <h3>Drīzumā</h3>
              <p>Vēlviena apakšnodaļa par ceļu uz LU</p>
            </Link>
          </div>
        </section> */}
      </>
    );
  }
}

export default HomePage;
