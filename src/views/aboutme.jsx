import React, { Component } from 'react'
import Ricards from '../assets/ricards.jpg';


export class aboutme extends Component {
  render() {
    return (
      <div className="article-page">
      <article className="article-content">
          <h2>Par mani</h2>
          <img src={Ricards} alt="Article" className="about-image" />
          <div className="article-body">
            <p>Esmu <b>Ričards Āboliņš-Aizbalts</b>, 3. gada datorzinātņu students <b>Latvijas universitātē</b>. Šī mājaslapa tika izveidota kursa "Tīmekļa dizaina pamati" ietvaros.</p>
            <p>Dzimu 2002. gada 26. jūlijā, tātad šobrīd esmu 21 gadu vecs. Piedzimu un uzaugu Rīgā, un jau no bērnības vasaras laikā lielākoties uzturos Saulkrastos, ģimenes vasarnīcā.</p>
            <p>Bērnībā nodarbojos ar dažādiem sporta veidiem: basketbolu, peldēšanu, airēšanu. Basketbolā gāju ļoti īsu brīdi, jo sirds problēmu dēļ nevarēju turpināt piedalīties. Periodiski gāju arī peldēšanā, kopumā kādus 4 gadus. Tur iemācījos ļoti labi peldēt visādos stilos, taču nekādās sacensībās neesmu piedalījies. Vienu vasaru trēnējos arī airēšanā. Tur trēnējos līdz tiku līdz airēšanai ar iesācēju laivām "pīlītēm", un tad īsi pēc tam pazuda interese.</p>
          </div>
      </article>
      </div>
    )
  }
}

export default aboutme