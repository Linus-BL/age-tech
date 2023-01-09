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

export default function Navbar() {
  const [active, setActive] = useState('anonser');

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
  return (
    <div className="navContainer">
      <Link
        to="/home"
        onClick={() => onSetActiveMenuItem('anonser')}
        className="iconTextContainer"
      >
        {active === 'anonser' ? <MdHome /> : <MdOutlineHome />}
        <p>Anonser</p>
      </Link>
      <Link
        to="/chat"
        onClick={() => onSetActiveMenuItem('chat')}
        className="iconTextContainer"
      >
        {active === 'chat' ? <MdChatBubble /> : <MdOutlineChatBubbleOutline />}
        <p>Chat</p>
      </Link>
      <Link
        to="/createAd"
        onClick={() => onSetActiveMenuItem('skapaAnons')}
        className="iconTextContainer"
      >
        {active === 'skapaAnons' ? <MdAddCircle /> : <MdAddCircleOutline />}
        <p>Skapa anons</p>
      </Link>
      <Link
        to="/shop"
        onClick={() => onSetActiveMenuItem('shop')}
        className="iconTextContainer"
      >
        {active === 'shop' ? <MdShoppingCart /> : <MdOutlineShoppingCart />}
        <p>Shop</p>
      </Link>
      <Link
        to="/profile"
        onClick={() => onSetActiveMenuItem('profil')}
        className="iconTextContainer"
      >
        {active === 'profil' ? <MdPerson /> : <MdPersonOutline />}
        <p>Profil</p>
      </Link>
    </div>
  );
}
