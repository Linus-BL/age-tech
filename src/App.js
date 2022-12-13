import React from 'react';
import logo from './logo.svg';
import './css/main.css';
import Button from './components/Button'
import Chip from './components/Chip'

function App() {
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
      </header>
      <Button onClickFunction={() => console.log("knapp")}>Knapp</Button>

      <Chip onClickFunction={() => console.log("tagg")}>Tagg</Chip>


    </div>
  );
}

export default App;
