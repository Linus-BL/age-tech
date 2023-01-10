import React from 'react';
import DealCard from './Deal';
import CoopImage from '../../coop.png';
import IcaImg from '../../ica.jpeg';
import SjImg from '../../sj.avif';
import BokaImg from '../../boka.jpeg';
import Points from './Points';
import Heading1 from '../textComponents/Heading1';
import SearchField from '../atomics/SearchField';
import Button from '../atomics/Button';

const deal1 = {
  title: 'Rabatt på coop',
  description: 'Med denna kupong kan du få hela 30% rabatt på hela sortimentet',
  points: 10,
  image: CoopImage,
};
const deal2 = {
  title: 'Rabatt på coop',
  description: 'Med denna kupong kan du få hela 30% rabatt på hela sortimentet',
  points: 25,
  image: IcaImg,
};
const deal3 = {
  title: 'Rabatt på bokadirekt',
  description: 'Med denna kupong kan du få hela 30% rabatt på hela sortimentet',
  points: 12,
  image: BokaImg,
};
const deal4 = {
  title: 'Halva priser på din biljett',
  description: 'Med denna kupong kan du 50% rabatt på en biljett inrikes',
  points: 12,
  image: SjImg,
};

const user = {
  points: 245,
};

const Shop = () => {
  return (
    <div className="shop">
      <Points user={user}></Points>
      <div className="dealsSection">
        <Heading1>Använd dina poäng</Heading1>
        <SearchField></SearchField>
        <DealCard deal={deal1}></DealCard>
        <DealCard deal={deal2}></DealCard>
        <DealCard deal={deal3}></DealCard>
        <DealCard deal={deal4}></DealCard>
        <DealCard deal={deal2}></DealCard>
        <DealCard deal={deal3}></DealCard>
        <div className="buttonSticky">
          {' '}
          <Button>Köp fler poäng</Button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
