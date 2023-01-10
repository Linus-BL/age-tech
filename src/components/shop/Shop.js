import React from 'react';
import DealCard from './Deal';
import CoopImage from '../../coop.png';
import Points from './Points';
import Heading1 from '../textComponents/Heading1';
import SearchField from '../atomics/SearchField';
import Button from '../atomics/Button';

const deal = {
  title: 'Rabatt på coop',
  description:
    'bla bla bla, så här mycket rabbat kan du få på hela sortimentet',
  points: 24,
  image: CoopImage,
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
        <DealCard deal={deal}></DealCard>
        <DealCard deal={deal}></DealCard>
        <DealCard deal={deal}></DealCard>
        <div className="buttonSticky">
          {' '}
          <Button>Kontakta annonsör</Button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
