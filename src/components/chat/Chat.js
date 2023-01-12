import React from 'react';
import BodyText from '../textComponents/BodyText';
import Heading1 from '../textComponents/Heading1';
import Heading5 from '../textComponents/Heading5';
import Heading6 from '../textComponents/Heading6';
import { Link } from 'react-router-dom';

export default function Chat() {
  return (
    <div className="chatContainer">
      <Heading1>Chattar</Heading1>
      <Heading6>Mina Annonser</Heading6>
      <div className="messageContainer">
        <Link to="/privateChat">
          <div className="chatCard">
            <img src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
            <div className="chatCardText">
              <Heading5>Baka bröd med mig</Heading5>
              <Heading6>Jane Doe</Heading6>
              <BodyText>Du: Perfekt! Glöm inte mjölet</BodyText>
            </div>
          </div>
        </Link>

        <div className="chatCard">
          <img src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"></img>
          <div className="chatCardText">
            <Heading5>Lär mig sticka</Heading5>
            <Heading6>Ulla Svensons</Heading6>
            <BodyText>Ulla: Jag tar med mig allt!</BodyText>
          </div>
        </div>
      </div>
      <Heading6>Andras annonser</Heading6>
      <div className="messageContainer">
        <div className="chatCard">
          <img src="https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80"></img>
          <div className="chatCardText">
            <Heading5>Behöver kattvakt</Heading5>
            <Heading6>Britta Knutsdotter</Heading6>
            <BodyText>
              Du: Lilla Sockan är så snäll hon <span>😻</span>
            </BodyText>
          </div>
        </div>
        <div className="chatCard">
          <img src="https://images.unsplash.com/photo-1620975621514-37af497accd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"></img>
          <div className="chatCardText">
            <Heading5>Lär mig bridge</Heading5>
            <Heading6>Knut Karlsson</Heading6>
            <BodyText>
              Knut: Kan du fixa lite bullar? <span>😋</span>
            </BodyText>
          </div>
        </div>
      </div>
    </div>
  );
}
