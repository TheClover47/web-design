import React, { Component } from 'react';
import RCHV from '../assets/RCHV.jpg';

export class skola extends Component {
  render() {
    return (
        <div className="article-page">
        <article className="article-content">
          <h2>Ceļš no Skolas līdz Latvijas Universitātei</h2>
          <p className="subheading">
            Apraksts kā es no mācībām vidusskolā tiku līdz Latvijas Universitātei.
          </p>
          <img src={RCHV} alt="Article" className="article-image" />
          <div className="article-body">
            <p>
              Jau kopš pirmās klases, 2009. gada septembra, es mācījos Rīgas Centra Humanitārajā Vidusskolā. Pirmie 9 gadi bija veltīti pamatizglītībai, taču pēdējie 3 vidusskolas gadi jau bija ar domu, lai tiktu tālāk uz kādu augstāku izglītības iestādi.
            </p>
            <p>
              No šīs pieturas attiet tikai autobusi. Lai nokļūtu uz centru es ikdienā braucu vai nu ar 51. vai 52. autobusu.
            </p>
            <p>
              Braucot pa ceļam var redzēt dažādus apskates objektus. Blakus Ulbrokas ielas pieturai ir tautā sauktā "Ušakova kepka", kas ir kalns, kur cilvēki atpūšas, ved staigāt suņus un ziemā priecājas ar ziemas priekiem. Pāri ielai no kalna ir tirdzniecības centrs Augusts, kurā atrodas sporta zāle, pļavnieku tirgus, apģērbu veikali, kafejnīcas un citi veikali. Agrāk tajā ēkā bija t/c "Prisma", taču tas jau vairākus gadus ir izbeidzis savu darbību Latvijā.
            </p>
            {/* <img src={Centrs} alt="Article Detail" className="article-detail-image"/> */}
          </div>
        </article>
      </div>
    )
  }
}

export default skola