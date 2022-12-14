import React from 'react'
import Heading1 from './textComponents/Heading1'

const Header = ({ children, onClickFunction, active = true }) => {

    return (
        <div className="headerSection">
            <Heading1>Boomer Biz</Heading1>
        </div>)
}

export default Header