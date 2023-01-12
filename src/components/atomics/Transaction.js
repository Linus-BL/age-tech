import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import Heading1 from '../textComponents/Heading1';
import Heading3 from '../textComponents/Heading3';
import Heading5 from '../textComponents/Heading5';
import BodyText from '../textComponents/BodyText';
import { useParams } from 'react-router-dom';
import { getUserData } from '../../api/userApi';
import Button from './Button';
import Heading4 from '../textComponents/Heading4';
import { getAdById } from '../../api/AdsApi';
import { MdCalendarToday } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdAccessTime } from 'react-icons/md';
import {
  MdStarOutline,
  MdCheckCircleOutline,
  MdCheckCircle,
} from 'react-icons/md';

function Transaction(props) {
  const { currentUser, userData } = useAuth();
  const params = useParams();
  const [otherUser, setOtherUser] = useState();
  const [ad, setAd] = useState();
  const [loading, setLoading] = useState(true);
  const id = 'wLZ0biBN62VE4uH5KTb5JOhvGCj1';
  const adId = 'mOxVnzvoA5QopmxJ2rgg';
  const [userAccepted, setUserAccepted] = useState(true);
  const [creatorAccepted, setCreatorAccepted] = useState(false);
  const [transactionDesc, setTransactionDesc] = useState("Birgitta kommer att käpa med sig bra stickor")

  useEffect(() => {
    try {
      getUserData(id)
        .then((res) => {
          setOtherUser(res);
        })
        .catch((e) => console.log(e));

      getAdById(adId)
        .then((res) => {
          setAd(res);
        })
        .catch((e) => {
          console.log(e);
        });

      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);

  // function to get date in "Måndag 12 Januari" format
  function getDate(date){
    
    let d = new Date(date);
    let day = d.getDay();
    let year = d.getFullYear();
    let adDate = d.getDate();
    let month = d.getMonth();
    const days = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
    const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]
    let s = days[day-1] + " " + adDate + " " + months[month];
    return s;
  }


  return (
    <div>

      {!loading && (
        <div className="transaction-container">
          <Heading3>Överenskommelse</Heading3>
          {ad && 
            <div>
              <div className='transaction-info'>
                <Heading4>Annons: </Heading4>
                <BodyText> {ad.titel}</BodyText>
              </div>
              <div className="iconText">
                <MdStarOutline className="icon" />
                <BodyText>{ad.compensation} poäng</BodyText>
              </div>
                <div className='transaction-description'>
                  <BodyText>{transactionDesc}</BodyText>
                  </div>
                <div className="iconText">
                <MdCalendarToday className="icon" />
                <Heading5>Datum</Heading5>
                <BodyText>{getDate(ad.date)}</BodyText>
              </div>
              <div className="iconText">
                <MdAccessTime className="icon" />
                <Heading5>Tid</Heading5>
                <BodyText>{ad.time}</BodyText>
              </div>
              <div className="iconText">
                <MdOutlineLocationOn className="icon" />
                <Heading5>Plats</Heading5>
                <BodyText>{ad.place}</BodyText>
              </div>
            </div>
        }
          <div className="transaction-members">
            <div className='transactionUserAccepted'>
              <div className='transactionUsers'>
                <img
                  className="profilePicture"
                  src={userData.profilePicture}
                ></img>
                <p className="creator">
                  {userData.name} {userData.surname}
                </p>
              </div>

              {userAccepted ? <MdCheckCircle size='24' color="#3F9367"/> : <MdCheckCircleOutline size='24' />}
            </div>
            {otherUser && 
                <div className='transactionUserAccepted'>
                  <div className='transactionUsers'>
                      <img
                        className="profilePicture"
                        src={otherUser.profilePicture}
                      ></img>
                      <p className="creator">
                          {otherUser.name} {otherUser.surname}
                      </p>
                  </div>

                {creatorAccepted ? <MdCheckCircle size='24' color="#3F9367"/> : <MdCheckCircleOutline size='24'/>}
                </div>
            }

          </div>
          <div className='buttonSection'>
              <div className='small'>
                    <div className='button secondaryBtn'>Stäng</div>
              </div>
              <div className='small '>
                <Button className='button'>Godkänn</Button>
              </div>

            </div>
        </div>
      )}

    </div>
  );
}

export default Transaction;
