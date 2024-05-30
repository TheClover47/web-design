import React, { Component } from 'react';
import Ulbroka from '../assets/ulbrokas_pietura.jpg'
import Centrs from '../assets/centrs.jpg';

class Majas extends Component {
  render() {
    return (
      <div className="article-page">
        <article className="article-content">
          <h2>Ceļš no Mājām līdz Latvijas Universitātei</h2>
          <p className="subheading">
            Apraksts kā es ikdienā tieku no savām mājām līdz Latvijas Universitātei.
          </p>
          <img src={Ulbroka} alt="Article" className="article-image" />
          <div className="article-body">
            <p>
            99% procentos gadījumu es uz universitāti braucu ar sabiedrisko transportu, pārējos gadījumos kāds mani aizved ar mašīnu. Blakus manām mājām ir Ulbrokas ielas pietura. No šīs pieturas attiet tikai autobusi. Lai nokļūtu uz centru es ikdienā braucu vai nu ar 51. vai 52. autobusu.
            </p>
            <p>
              Braucot pa ceļam var redzēt dažādus apskates objektus. Blakus Ulbrokas ielas pieturai ir tautā sauktā "Ušakova kepka", kas ir kalns, kur cilvēki atpūšas, ved staigāt suņus un ziemā priecājas ar ziemas priekiem. Pāri ielai no kalna ir tirdzniecības centrs Augusts, kurā atrodas sporta zāle, pļavnieku tirgus, apģērbu veikali, kafejnīcas un citi veikali. Agrāk tajā ēkā bija t/c "Prisma", taču tas jau vairākus gadus ir izbeidzis savu darbību Latvijā.
            </p>
            <img src={Centrs} alt="Article Detail" className="article-detail-image"/>
          </div>
        </article>
      </div>
    );
  }
}

export default Majas;
