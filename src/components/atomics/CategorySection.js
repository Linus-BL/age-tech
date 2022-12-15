import React from 'react'
import ScrollableSection from './ScrollableSection'
import Heading3 from '../textComponents/Heading3'

const CategorySection = ({ category = "Category Name", ads }) => {
    return (
        <div>
            <div className="categoryHeading"><Heading3>{category}</Heading3><div>Visa mer ></div></div>

            <div className="scrollableSection">
                <ScrollableSection ads={ads}></ScrollableSection>
            </div>
        </div>)

}

export default CategorySection