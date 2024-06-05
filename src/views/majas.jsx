import React, { Component } from 'react';
import Ulbroka from '../assets/ulbrokas_pietura.jpg'
import Centrs from '../assets/centrs.jpg';
import Maajas from '../assets/majas.jpg';
import Augusts from '../assets/augusts.jpg';
import Kepka from '../assets/kepka.jpg';

class Majas extends Component {
  render() {
    return (
      <div className="article-page">
        <article className="article-content">
          <h2>Ceļš no Mājām līdz Latvijas Universitātei</h2>
          <p className="subheading">
            Apraksts kā es ikdienā tieku no savām mājām līdz Latvijas Universitātei.
          </p>
          <div className="article-body">
            <img src={Maajas} alt="Article" className="article-image" />
            <p>Dzīvoju Ulbrokas ielā 13, jau kopš 2012. gada, kad biju tikko pabeidzis 3. klasi. Pirms tam dzīvoju Tallinas ielā, kas bija ļoti tuvu manai skolai. Pēc pārvākšanās skola atradās daudz tālāk, un kopā ar ģimeni bija daudz pārdomas vai pāriet uz citu skolu. Taču man Rīgas Centra humanitārā vidusskola tik ļoti patika, ka beigās izvēlējos palikt turpat un samierināties ar papildus 20 minūtēm ceļā uz skolu.</p>
            <img src={Ulbroka} alt="Article" className="article-image" />
            <p>
            99% procentos gadījumu es uz universitāti braucu ar sabiedrisko transportu, pārējos gadījumos kāds mani aizved ar mašīnu. Blakus manām mājām ir Ulbrokas ielas pietura. No šīs pieturas attiet tikai autobusi. Lai nokļūtu uz centru es ikdienā braucu vai nu ar 51. vai 52. autobusu.
            </p>
            <img src={Kepka} alt="Article" className="article-image" />
            <p>
              Braucot pa ceļam var redzēt dažādus apskates objektus. Blakus Ulbrokas ielas pieturai ir tautā sauktā "Ušakova kepka", kas ir kalns, kur cilvēki atpūšas, ved staigāt suņus un ziemā priecājas ar ziemas priekiem. Pāri ielai no kalna ir tirdzniecības centrs Augusts, kurā atrodas sporta zāle, pļavnieku tirgus, apģērbu veikali, kafejnīcas un citi veikali. Agrāk tajā ēkā bija t/c "Prisma", taču tas jau vairākus gadus ir izbeidzis savu darbību Latvijā.
            </p>
            <img src={Augusts} alt="Article" className="article-image" />
            <p>Augustā ir forši xd</p>
            <img src={Centrs} alt="Article Detail" className="article-image"/>
            <p>Ar transportu braucu līdz Centrālstacijas pieturai, kas šobrīd atrodas pretī Origo.</p>
          </div>
        </article>
      </div>
    );
  }
}

export default Majas;
