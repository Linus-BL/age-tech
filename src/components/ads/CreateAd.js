import React from 'react';
import Button from '../atomics/Button';
import { useNavigate } from 'react-router-dom';
import Heading1 from '../textComponents/Heading1';

export default function CreateAd() {
  const navigate = useNavigate();

  const navigateOffer = () => {
    navigate('/createOffer');
  };
  const navigateRequest = () => {
    navigate('/createRequest');
  };

  return (
    <div className="createAdContainer">
      <Heading1>Välj typ av annons</Heading1>
      <Button onClickFunction={navigateOffer}>Erbjudande</Button>
      <Button onClickFunction={navigateRequest}>Förfrågan</Button>
    </div>
  );
}
