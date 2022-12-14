import React from 'react';
import logo from './logo.svg';
import './css/main.css';
import Button from './components/Button'
import Chip from './components/Chip'
import AdCard from './components/AdCard'
import testImage from '../src/ad_test.jpg'
import ScrollableSection from './components/ScrollableSection'
import Heading1 from './components/textComponents/Heading1'

const ad = {
  id: 1,
  title: "Baka hos mig",
  description: "Kom och baka",
  image: testImage,
  location: "Skultunaparken",
  date: "20 november",
  points: 23,
}

const ads = [{
  id: 1,
  title: "Baka hos mig",
  description: "Kom och baka",
  image: testImage,
  location: "Skultunaparken",
  date: "20 november",
  points: 23
}, {
  id: 2,
  title: "snickra hos mig",
  description: "Kom och baka",
  image: testImage,
  location: "Skultunaparken",
  date: "20 november",
  points: 23
},
{
  id: 3,
  title: "snickra hos mig",
  description: "Kom och baka",
  image: testImage,
  location: "Skultunaparken",
  date: "20 november",
  points: 23
},
{
  id: 4,
  title: "snickra hos mig",
  description: "Kom och baka",
  image: testImage,
  location: "Skultunaparken",
  date: "20 november",
  points: 23
}]


function App() {
  const active = false;
  return (
    <div className="App">

      <header className="App-header">

        <Heading1>Boomer Biz</Heading1>

      </header>


      <Chip onClickFunction={() => console.log("tagg")}>Tagg</Chip>

      <ScrollableSection ads={ads}></ScrollableSection>
      <AdCard ad={ad}></AdCard>
      <Button onClickFunction={() => console.log("knapp")} active={active} >Knapp</Button>

    </div>
  );
}

export default App;
