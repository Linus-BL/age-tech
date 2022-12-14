import React from 'react'
import AdCard from './AdCard'

const ScrollableSection = ({ ads }) => {
    const sectionAds = ads;
    const sectionItems = sectionAds.map((ad) =>
        // Correct! Key should be specified inside the array.
        <AdCard ad={ad} key={ad.id}></AdCard>)

    return (
        <div className="scrollableSection">
            {sectionItems}

        </div>)
}

export default ScrollableSection