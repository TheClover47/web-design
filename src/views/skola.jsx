import React, { Component } from 'react';
import RCHV from '../assets/RCHV.jpg';

export class skola extends Component {
  render() {
    return (
        <div className="article-page">
        <article className="article-content">
          <h2>Ceļš no Skolas līdz Latvijas Universitātei</h2>
          <p className="subheading">
            Apraksts kā es no mācībām Rīgas Centra Humanitārajā Vidusskolā tiku līdz Latvijas Universitātei.
          </p>
          <div className="article-body">
            <img src={RCHV} alt="Article" className="article-image" />
            <p>
              Jau kopš pirmās klases, 2009. gada septembra, es mācījos Rīgas Centra Humanitārajā Vidusskolā. Pirmie 9 gadi bija veltīti pamatizglītībai, taču pēdējie 3 vidusskolas gadi jau bija ar domu, lai tiktu tālāk uz kādu augstāku izglītības iestādi.
            </p>
            <p>Turpinot mācības vidusskolā, es jau zināju, ka vēlos pēc skolas doties uz kādu augstskolu. Taču tad vēl man nebija pilnībā skaidrs uz kādu nozari, kādu programmu vai pat kādu universitāti, lai es dodos. Vidusskolā man ļoti paveicās, ka tiku klasē, kurā bija superīgs skolotājs. Viņš bija matemātikas skolotājs, kura mīļākais teiciens pāris minūtes pirms stundas sākuma bija "Ātrāk sāksim, ātrāk sāksim!". Viņa dēļ man vispār parādijās interese un vēlme pildīt un mācīties matemātiku. Bija maza daļa klasesbiedru, kuram līdz galam īsti nepatika viņa uzskati, taču pārsvarā visi respektēja viņu.</p>
            <p>Pateicoties šīm pastiprinātām zināšanām par matemātiku, radās interese pievienoties programmēšanas pulciņā, kas bija kā papildus stunda skolā. Tur es iemācījos programmēšanas pamatus un sapratu, ka vēlos savu karjeru veidot ap programmēšanu.</p>
            <p>Latvijas Universitāti es izvēlējos pāris iemeslu dēļ. Pirmkārt tā man ir tuvāk un vieglāk pieejama, nekā braukt uz RTU pārdaugavā. Otrkārt mans programmēšanas pulciņa skolotājs arī bija mācījies LU un ieteica to. Treškārt pāris no klases biedriem jau bija izvēlējušies doties uz LU datorzinātņu programmu, un tad beigās arī es izvēlējos turp doties.</p>
            {/* <img src={Centrs} alt="Article Detail" className="article-detail-image"/> */}
          </div>
        </article>
      </div>
    )
  }
}

export default skola