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
      </>
    );
  }
}

export default HomePage;
