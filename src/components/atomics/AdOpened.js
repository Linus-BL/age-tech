import React, { useEffect } from 'react';
import BodyText from '../textComponents/BodyText';
import Heading1 from '../textComponents/Heading1';
import { MdCalendarToday } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';

import { MdAccessTime } from 'react-icons/md';
import { MdStarOutline } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router-dom';
import { Logger } from 'sass';
import testImage from '../../ad_test.jpg';
import Button from './Button';
import Heading5 from '../textComponents/Heading5';
import TagSection from './TagsSection';
import Profile from '../profile/Profile';
import Heading4 from '../textComponents/Heading4';

const ad = {
    id: 1,
    title: 'Baka hos mig',
    description:
        'Under en eftermiddag lär jag dig att baka med sursdeg. Jag kommer visa exakt hur du gör dig egen surdegstartare occh hur du har hand om din surdeg. Vi kommer också att att baka ut upp till 4 limpor med med surdeg som bas. ',
    image: testImage,
    location: 'Skultunaparken',
    date: '20 november',
    time: '16.00',
    points: 23,
};

const tags = [
    { id: 1, tagName: 'Stickning' },
    { id: 2, tagName: 'Måla' },
    { id: 3, tagName: 'Motorcross' },
    { id: 4, tagName: 'Fest' },
    { id: 5, tagName: 'Snickeri' },
    { id: 6, tagName: 'Bakning' },
];

const adOpen = (props) => {
    //takes in one ad object though props

    const params = useParams();
    const { id } = params;

    useEffect(() => {
        // Update the document title using the browser API
        console.log('ID from params', id);
    });

    const navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    }

    return (
        <div className="adOpen">
            <button type="button" onClick={handleClick}>
                Go home
      </button>

            <div className="adImgContainer">
                <img src={ad.image} alt="ad" className="adCardImage"></img>
            </div>

            <div className="informationContentAd">
                <div className="titleAndPoints">
                    <Heading1 className="title">{ad.title}</Heading1>
                    <div className="iconText">
                        <MdStarOutline className="icon" />
                        <BodyText>{ad.points} poäng</BodyText>
                    </div>
                </div>
                <BodyText>{ad.description}</BodyText>
                {/* get profile and use data from there */}
                <div className="creatorSection">
                    <div className="profilePicture"></div>
                    <Heading4>Birgitta Bohlin</Heading4>
                </div>
                <Button>Kontakta annonsör</Button>
                <div className="shortInfoSection">
                    <div className="iconText">
                        {' '}
                        <MdOutlineLocationOn className="icon" />
                        <Heading5>Plats</Heading5>
                    </div>
                    <BodyText>{ad.location}</BodyText>
                    <div className="iconText">
                        {' '}
                        <MdCalendarToday className="icon" /> <Heading5>Datum</Heading5>
                    </div>
                    <BodyText>{ad.date}</BodyText>
                    <div className="iconText">
                        <MdAccessTime />
                        <Heading5>Tid</Heading5>
                    </div>
                    <BodyText>{ad.time}</BodyText>
                </div>
                <TagSection tags={tags}></TagSection>
            </div>
        </div>
    );
};

export default adOpen;
