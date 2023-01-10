import React, { useState, useEffect } from 'react';
import {
  MdPersonOutline,
  MdPerson,
  MdOutlineShoppingCart,
  MdShoppingCart,
  MdOutlineChatBubbleOutline,
  MdChatBubble,
  MdOutlineHome,
  MdHome,
  MdAddCircleOutline,
  MdAddCircle,
} from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import BodyTextLight from '../textComponents/BodyTextLight';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const [active, setActive] = useState('anonser');
  const { currentUser } = useAuth();

  useEffect(() => {
    if (active) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [active]);

  const onSetActiveMenuItem = (item) => {
    if (item !== active) {
      setActive(item);
    }
  };
  return currentUser ? (
    <div className="navContainer">
      <Link
        to="/home"
        onClick={() => onSetActiveMenuItem('anonser')}
        className="iconTextContainer"
      >
        {active === 'anonser' ? <MdHome /> : <MdOutlineHome />}
        <BodyTextLight>Annonser</BodyTextLight>
      </Link>
      <Link
        to="/chat"
        onClick={() => onSetActiveMenuItem('chat')}
        className="iconTextContainer"
      >
        {active === 'chat' ? <MdChatBubble /> : <MdOutlineChatBubbleOutline />}
        <BodyTextLight>Chat</BodyTextLight>
      </Link>
      <Link
        to="/createAd"
        onClick={() => onSetActiveMenuItem('skapaAnons')}
        className="iconTextContainer"
      >
        {active === 'skapaAnons' ? <MdAddCircle /> : <MdAddCircleOutline />}
        <BodyTextLight>Skapa annons</BodyTextLight>
      </Link>
      <Link
        to="/shop"
        onClick={() => onSetActiveMenuItem('shop')}
        className="iconTextContainer"
      >
        {active === 'shop' ? <MdShoppingCart /> : <MdOutlineShoppingCart />}
        <BodyTextLight>Shop</BodyTextLight>
      </Link>
      <Link
        to="/profile"
        onClick={() => onSetActiveMenuItem('profil')}
        className="iconTextContainer"
      >
        {active === 'profil' ? <MdPerson /> : <MdPersonOutline />}
        <BodyTextLight>Profil</BodyTextLight>
      </Link>
    </div>
  ) : (
    ''
  );
}
