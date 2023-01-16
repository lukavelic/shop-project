import './App.css';
import Header from './layouts/Header';
import Section from './layouts/Section';
import Button from './components/Button';

function App() {
  return (
    <div className="app">
      <Header/>
      <Section className={'home'}>
        <span className='home-text'>We've got what you need.</span>
        <Button className={'shop'} name={'shop'} value={'Shop Now'} location={'/shop'}/>
      </Section>
      <Section className={'hero'}/>
    </div>
  );
}

export default App;
