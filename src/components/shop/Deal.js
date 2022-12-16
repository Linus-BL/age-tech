import React from 'react'
import BodyText from '../textComponents/BodyText'
import Heading4 from '../textComponents/Heading4'
import { MdCalendarToday } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdStarOutline } from "react-icons/md";


const adCard = (props) => {

    return (
        <div className="dealCard" onClick={props.onClickFunction} >
            <div className="dealCardImgContainer" > <img src={props.deal.image} alt="deal" className="adCardImage"></img></div>
            <div className="textContentDeal">
                <Heading4 className="title">{props.deal.title}</Heading4>
                <BodyText>{props.deal.description}</BodyText>

                <div className="iconText"> <MdStarOutline className="icon" /><BodyText>{props.deal.points} poäng</BodyText></div>
            </div>
        </div >)
}

export default adCard