import './App.css';
import Header from './layouts/Header';
import Section from './layouts/Section';

function App() {
  return (
    <div className="app">
      <Header/>
      <Section className={'home'}>
        <span>We have got what you need.</span>
      </Section>
      <Section className={'hero'}/>
    </div>
  );
}

export default App;
