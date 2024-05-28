import React, { Component } from 'react';
import Ulbroka from '../assets/ulbrokas_pietura.jpg'
import Centrs from '../assets/centrs.jpg';

class Majas extends Component {
  render() {
    return (
      <div className="article-page">
        <article className="article-content">
          <h1>Ceļš no Mājām līdz Latvijas Universitātei</h1>
          <p className="subheading">
            Subheading that sets up context, shares more info about the author, or generally gets people psyched to keep reading
          </p>
          <img src={Ulbroka} alt="Article" className="article-image" />
          <div className="article-body">
            <p>
              Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:
            </p>
            <p>
              Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod iure. Exclusive Izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qu wardrobe aliquid, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
            </p>
            <p>
              Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
            </p>
            <img src={Centrs} alt="Article Detail" className="article-detail-image" />
          </div>
        </article>
      </div>
    );
  }
}

export default Majas;
