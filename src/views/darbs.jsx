import React, { Component } from 'react';
import Zageris from '../assets/zageris.jpg'
import Ofiss from '../assets/ofiss.jpg';

class Darbs extends Component {
  render() {
    return (
      <div className="article-page">
        <article className="article-content">
          <h1>Ceļš no Darba līdz Latvijas Universitātei</h1>
          <p className="subheading">
            Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading
          </p>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2em'}}>
          <img src={Zageris} alt="Article" className="article-image" />
          <div className="article-body">
            <h2>Rankas ielas pietura</h2>
            <p>
              Tieši blakus manai darbavietai ir Rankas ielas pietura.
            </p>
            <p>
              Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod iure. Exclusive Izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qu wardrobe aliquid, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
            </p>
            <p>
              Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
            </p>
          </div>
          <div className="article-body">
            <h2>Ofiss bez Chandra</h2>
            <p>
              Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
            </p>
            <p>
              Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod iure. Exclusive Izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qu wardrobe aliquid, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
            </p>
            <p>
              Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
            </p>
          </div>
          <img src={Ofiss} alt="Article Detail" className="article-image" />
          </div>
        </article>
      </div>
    );
  }
}

export default Darbs;
