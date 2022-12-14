import React from 'react';
import './css/main.css';
import Button from './components/Button'
import AdCard from './components/AdCard'
import testImage from '../src/ad_test.jpg'
import ScrollableSection from './components/ScrollableSection'
import CategorySection from './components/CategorySection'
import TagsSection from './components/TagsSection'
import Header from './components/Header'

const tags = [{ id: 1, tagName: "Stickning" },
{ id: 2, tagName: "Måla" },
{ id: 3, tagName: "Motorkross" },
{ id: 4, tagName: "Fest" },
{ id: 5, tagName: "Snickeri" },
{ id: 6, tagName: "Bakning" }]

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
        <Header></Header>

      </header>

      <TagsSection tags={tags}></TagsSection>


      {/* <Chip onClickFunction={() => console.log("tagg")}>Tagg</Chip> */}

      <CategorySection category="Motorkross" ads={ads}></CategorySection>
      <CategorySection category="Stickning" ads={ads}></CategorySection>

      <ScrollableSection ads={ads}></ScrollableSection>
      <AdCard ad={ad}></AdCard>
      <Button onClickFunction={() => console.log("knapp")} active={active} >Knapp</Button>

    </div>
  );
}

export default App;
