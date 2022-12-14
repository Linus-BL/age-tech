import React from 'react'
import ScrollableSection from './ScrollableSection'
import Heading3 from './textComponents/Heading3'
import Chip from './Chip'

const TagSection = ({ sectionTitle = "Kolla in dessa", tags }) => {
    const sectionItems = tags.map((tag) =>
        // Correct! Key should be specified inside the array.
        <Chip tagName={tag.tagName} key={tag.id}></Chip>)
    return (
        <div className="tagsSection">
            <Heading3 className="sectionTitle">{sectionTitle}</Heading3>

            <div className="tags">
                {sectionItems}
            </div>
        </div>)

}

export default TagSection