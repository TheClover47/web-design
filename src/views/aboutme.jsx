import React, { Component } from 'react';
import Ricards from '../assets/ricards.jpg';

export class AboutMe extends Component {
  render() {
    return (
      <div className="article-page">
        <article className="article-content">
          <h2>Par mani</h2>
          <img src={Ricards} alt="Ričards Āboliņš-Aizbalts" className="about-image" />
          <div className="article-body">
            <p>Esmu <b>Ričards Āboliņš-Aizbalts</b>, 3. gada datorzinātņu students <b>Latvijas universitātē</b>. Šī mājaslapa tika izveidota kursa "Tīmekļa dizaina pamati" ietvaros.</p>
            <p>Dzimu <b>2002. gada 26. jūlijā</b>, tātad šobrīd esmu 21 gadu vecs. Piedzimu un uzaugu <b>Rīgā</b>, un jau no bērnības vasaras laikā lielākoties uzturos <b>Saulkrastos</b>, ģimenes vasarnīcā.</p>
            <p>Bērnībā nodarbojos ar dažādiem sporta veidiem: basketbolu, peldēšanu, airēšanu. <b>Basketbolā</b> gāju ļoti īsu brīdi pirmās klases sākumā. Sirds problēmu dēļ man neatļāva turpināt piedalīties nodarbībās. Vairākus gadus vēlāk, izejot vairākus testus, tika secināts ka manai sirdij ir viss kārtībā, un ka tomēr es varu piedalīties sporta aktivitātēs ar lielu slodzi. Periodiski gāju arī <b>peldēšanā</b>, kopumā kādus 4 gadus. Tur iemācījos ļoti labi peldēt visādos stilos, taču nekādās sacensībās neesmu piedalījies. Vienu vasaru trēnējos arī <b>airēšanā</b>. Tur trēnējos līdz tiku līdz airēšanai ar iesācēju laivām "pīlītēm", un tad īsi pēc tam pazuda interese.</p>
            <p>Brīvo laiku pavadu klausoties mūziku, spēlējot video spēles un programmējot paša veidotos projektus. Mans mīļākais mūzikas žanrs ir <b>hiphops</b>, mīļākā video spēle ir <b>Counter-Strike: Global Offesnive</b> un programmējot pārsvarā izstrādāju <b>tīmekļa lietotnes</b>.</p>
          </div>
        </article>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "mainEntity": {
                "@type": "Person",
                "name": "Ričards Āboliņš-Aizbalts",
                "url": "https://theclover47.github.io/web-design/par-mani",
                "image": "https://theclover47.github.io/web-design/assets/ricards.jpg",
                "birthDate": "2002-07-26",
                "email": "rabolinss@gmail.com",
                "jobTitle": "Full-stack Developer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Datu Tehnoloģiju Grupa",
                  "url": "https://dtg.lv/"
                },
                "sameAs": [
                  "https://www.linkedin.com/in/ri%C4%8Dards-%C4%81boli%C5%86%C5%A1-aizbalts-214814280/",
                  "https://github.com/TheClover47"
                ]
              }
            }
          `}
        </script>
      </div>
    );
  }
}

export default AboutMe;
