import React from 'react';
import logo from './logo.svg';
import './css/main.css';
import Button from './components/Button'
import Chip from './components/Chip'
import AdCard from './components/AdCard'

function App() {
  const active = false;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

          Learn React
        </a>
      </header>s
      <Button onClickFunction={() => console.log("knapp")} active={active} >Knapp</Button>

      <Chip onClickFunction={() => console.log("tagg")}>Tagg</Chip>
      <AdCard onClickFunction={() => console.log(active)} title="Namn" description="bla bla bla" ></AdCard>

    </div>
  );
}

export default App;
