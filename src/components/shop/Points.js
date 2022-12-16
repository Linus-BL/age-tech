import React from 'react'
import Heading3 from '../textComponents/Heading3'
import { MdStarOutline } from "react-icons/md";

const PointsSection = (props) => {
    return (
        <div className="pointsSection">
            <Heading3 className="title">Dina poäng</Heading3>
            <div className="points"> <MdStarOutline className="iconPoints" /><Heading3 >{props.user.points} poäng</Heading3></div>
        </div >)
}

export default PointsSection