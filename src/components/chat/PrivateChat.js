import React, { useState } from 'react';
import BodyText from '../textComponents/BodyText';
import Heading6 from '../textComponents/Heading6';
import BackButton from '../atomics/BackButton';
import Button from '../atomics/Button';
import TextInput from '../atomics/TextInput';
import { MdSend } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import CryptoJS from 'crypto-js';

export default function PrivateChat() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const JaneDoe = 'vRa8Dcy4uYd3tS8WMPY1vylEyjB3';
  const adId = 'LCFPetVhYQMV9ta5AupL';
  const myID = currentUser.uid;
  const creator = JaneDoe;
  const users = {
    creator: creator,
    user: myID,
  };
  const userString = JSON.stringify(users);
  const salt = 'kiyK7CH3udgJ';

  const navigateTransaction = () => {
    // encrypt userdata from params
    var cipher = CryptoJS.AES.encrypt(userString, salt).toString();
    //replace special characters (they can messup the url routing)
    cipher = encodeURIComponent(cipher.toString('base64'));
    console.log(cipher);
    navigate(`/transaction/${adId}/${cipher}`);
  };

  return (
    <>
      <div className="privateChatHeader">
        <BackButton onImage={false}></BackButton>
        <img src="https://images.unsplash.com/photo-1550691389-8d62871a20e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"></img>
        <div className="privateChatHeaderText">
          <Heading6>Jane Doe</Heading6>
          <BodyText>Janes erbjudande: Baka bröd med mig</BodyText>
        </div>
      </div>
      <div className="privateChatContainer">
        <div className="chatArea">
          <div className="buttonSticky">
            {' '}
            <Button onClickFunction={navigateTransaction}>
              Överenskommelse
            </Button>
          </div>
          <div className="chatMsg sent">
            <BodyText>
              Hej! Är intreserad av ditt erbjudande men undrar om du kan baka
              glutenfritt bröd också?
            </BodyText>
          </div>
          <div className="chatMsg received">
            <img src="https://images.unsplash.com/photo-1550691389-8d62871a20e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"></img>

            <BodyText>Ja det kan jag :)</BodyText>
          </div>
          <div className="chatMsg sent">
            <BodyText>
              Perfekt! Ska jag införskappa ingredienserna eller fixar du det?
              Ska jag fixa dom behöver jag nog en lista för har ingen aning hur
              man bakar haha :)
            </BodyText>
          </div>
          <p className="timeSent">Skickat 13:40</p>
        </div>
        <div className="keyboardContainer">
          <div className="keyboardContainerInput">
            <p>Meddelande...</p>
            <MdSend />
          </div>
        </div>
      </div>
    </>
  );
}
