import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

{
  /*
const switchData = {
    buttonOne: "log in",
    buttonTwo: "log out",
    buttonOneNavigation: "/dashboard",
    buttonTwoNavigation: "/dashboard",
    activeButton: "buttonOne",
}

  <SwitchButton data={switchData}/>
*/
}

const switchButton = (props) => {
  const [active, setActive] = useState(props.data.activeButton);
  const adOffer  = 'adOffer';
  const adRequest = 'adRequest';

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
      if(item == 'buttonOne'){
        props.updateActive(adOffer)
      }else{
        props.updateActive(adRequest);
      }
    }
  };

  return (
    <div className="switchContainer">
      <Link
        to={props.data.buttonOneNavigation}
        onClick={() => onSetActiveMenuItem('buttonOne')}
        className={active === 'buttonOne' ? 'active left' : ''}
      >
        {props.data.buttonOne}
      </Link>
      <Link
        to={props.data.buttonTwoNavigation}
        onClick={() => onSetActiveMenuItem('buttonTwo')}
        className={active === 'buttonTwo' ? 'active right' : ''}
      >
        {props.data.buttonTwo}
      </Link>
    </div>
  );
};

export default switchButton;
