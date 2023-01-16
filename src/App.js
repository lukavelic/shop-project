import './App.css';
import Header from './layouts/Header';
import Section from './layouts/Section';
import Card from './layouts/Card';
import Button from './components/Button';
import Footer from './layouts/Footer';
import { useState } from 'react';

import img1 from './assets/90322-00_EPIC-SW-CARB-BLUMRNO-CHRM_HERO.webp';
import img2 from './assets/90622-01_TARMAC-SL7-SW-DI2-REDTNT-METWHTSIL-BLK_HERO.webp';
import img3 from './assets/60719-003_HLMT_SW-EVADE-II-HLMT-ANGI-MIPS-CPSC-BLK-M_HERO.webp';
import img4 from './assets/61022-604_SHOE_SW-7-LACE-RD-SHOE-BLK-44_PAIR.webp';


function App() {
  const [heroCards, setHeroCards] = useState(
    [
      { id: 0,
        img: img1,
        title: 'S-Works Epic',
        description: 'You’re looking at the fastest XC bike in the world.'
      },
      { 
        id: 1,
        img: img2,
        title: 'S-Works Tarmac SL7',
        description: 'Climb on the lightest bike the UCI allows, then descend on the fastest.'
      },
    ]
  )

  return (
    <div className="app">
      <Header/>
      <Section className={'home'}>
        <span className='home-text'>We've got what you need.</span>
        <Button className={'shop'} name={'shop'} value={'Shop Now'} location={'/shop'}/>
      </Section>
      <Section className={'hero'}>
        <div className='hero-title'>
          <span>Our best of the best.</span>
        </div>
        <div className="card-container">
          {
            heroCards.map((card) => {
              return <Card key={card.id} className='hero-card' img={card.img} title={card.title} description={card.description} location={'/shop'}/>
            })
          }
        </div>
        <div className='hero-title bottom'>
          <span>Visit the shop to find out more.</span>
        </div>
      </Section>
      <Footer/>
    </div>
  );
}

export default App;
