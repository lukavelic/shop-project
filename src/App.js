import './App.css';
import Header from './layouts/Header';
import Section from './layouts/Section';
import Card from './layouts/Card';
import Button from './components/Button';
import { useState } from 'react';

import img1 from './assets/90622-01_TARMAC-SL7-SW-DI2-REDTNT-METWHTSIL-BLK_HERO.webp';
import img2 from './assets/90322-00_EPIC-SW-CARB-BLUMRNO-CHRM_HERO.webp';
import img3 from './assets/60719-003_HLMT_SW-EVADE-II-HLMT-ANGI-MIPS-CPSC-BLK-M_HERO.webp';
import img4 from './assets/61022-604_SHOE_SW-7-LACE-RD-SHOE-BLK-44_PAIR.webp';


function App() {
  const [heroCards, setHeroCards] = useState(
    [
      {
        img: img1,
        title: 'S-Works Epic',
        description: 'You’re looking at the fastest XC bike in the world.'
      },
      {
        img: img2,
        title: 'S-Works Tarmac SL7',
        description: 'Climb on the lightest bike the UCI allows, then descend on the fastest.'
      },
      {
        img: img3,
        title: 'S-Works Evade II',
        description: 'For road race helmets, there’s nothing that can match this performance.'
      },
      {
        img: img4,
        title: 'S-Works 7 Lace',
        description: 'S-Works 7 Lace marries classic style to race-winning heritage and performance.'
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
        {
          heroCards.map((card) => {
            return <Card className='shop-card' img={card.img} title={card.title} description={card.description} location={'/shop'}/>
          })
        }
      </Section>
    </div>
  );
}

export default App;
