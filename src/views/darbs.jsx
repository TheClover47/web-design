import React, { Component } from 'react';
import Ofiss from '../assets/ofiss.jpg';

class Darbs extends Component {
  render() {
    return (
      <div className="article-page">
        <article className="article-content">
          <h2>Ceļš no Darba līdz Latvijas Universitātei</h2>
          <p className="subheading">
          Apraksts kā es ikdienā tieku no savas darba vietas līdz Latvijas Universitātei.
          </p>
          <div>
          <div className="article-body">
            <img src={Ofiss} alt="DTG Ofiss" className="article-image"/>
            <p>Kopš 2023. gada oktobra, strādāju "Datu Tehnoloģiju Grupā" jeb DTG. Tas ir uzņēmums, kas piedāvā dažādus programmēšanas risinājums dažādiem klientiem. Lielākie un pazīstamākie klienti ir McDonalds, Bite, Pasažieru Vilciens, Sadales Tīkli, Arēna Rīga. </p>
            <p>2023. gada rudens semestrī man bija nepieciešams iziet 3 mēnešu praksi kādā uzņēmumā. Caur paziņām dabuju kontaktu ar uzņēmuma vadītāju un sarunāju interviju uz programmētāja praksi. Paveicās ka šajā darba vietā galvenais fokuss programmētājiem bija tieši uz tīmekļa lietotņu izstrādi, kas tobrīd tieši mani interesēja. Intervija bija samērā viegla, jo nebija jāveic kāds zināšanu pārbaudes tests, kā tas ir pieņemts lielākajā daļā uzņēmumu.</p>
            <p>Izejot praksi, uzņēmuma pārstāvji vēlējās, lai turpinu strādāt pie viņiem patstāvīgi, kam es labprāt piekritu. Tagad jau 5 mēnēšus oficiāli strādāju DTG, un esmu ļoti priecīgs par iegūto darba vietu. Labi kolēģi, nozares zināšanu attīstīšana, darba pieredze, kopumā laba atmosfēra.</p>
          </div>
          <div className="article-body">
            <p>Tieši blakus manai darbavietai ir Rankas ielas pietura uz kuru es vienmēr eju, lai dotos uz mājām vai universitāti. No šīs pieturas var braukt ar 2. autobusu vai 15. trolējbusu, kas brauc no trolejbusu parka ganību dambī. Papildus opcija ir braukt ar 5. tramvaju, kuram arī pieturu sauc Rankas iela.</p>
            <p>Braucot pa Pulkveža Brieža ielu, var redzēt Jaunās Hanzas peronu, kā arī blakus tam ir Pillar ēka, kas arī ir DTG klienti. Braucot uz centra pusi, paceļam var redzēt Kronvalda parku, kā arī tieši blakus tam ir kongresu nams.</p>
            <p>Visbeidzot nogriežoties uz Raiņa Bulvāri, var redzēt Bastējkalna parku, Brīvības pieminekli un tad jau esam klāt pie Latvijas Universitātes.</p>
          </div>
          </div>
        </article>
      </div>
    );
  }
}

export default Darbs;
