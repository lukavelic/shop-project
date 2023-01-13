import './App.css';
import Header from './layouts/Header';
import Section from './layouts/Section';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Section className={'home'}/>
      <Section className={'hero'}/>
    </div>
  );
}

export default App;
