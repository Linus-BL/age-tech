import React, { useEffect } from 'react';
import AdCard from '../atomics/AdCard'
import testImage from '../../ad_test.jpg';
import Heading1 from '../textComponents/Heading1'
import { useParams, useNavigate } from 'react-router-dom';

const ads = [
    {
        id: 1,
        title: 'Baka hos mig',
        description: 'Kom och baka',
        image: testImage,
        location: 'Skultunaparken',
        date: '20 november',
        points: 23,
    },
    {
        id: 2,
        title: 'snickra hos mig',
        description: 'Kom och baka',
        image: testImage,
        location: 'Skultunaparken',
        date: '20 november',
        points: 23,
    },
    {
        id: 3,
        title: 'snickra hos mig',
        description: 'Kom och baka',
        image: testImage,
        location: 'Skultunaparken',
        date: '20 november',
        points: 23,
    },
    {
        id: 4,
        title: 'snickra hos mig',
        description: 'Kom och baka',
        image: testImage,
        location: 'Skultunaparken',
        date: '20 november',
        points: 23,
    },
];

//Use get-all ads api call

const AllAdsByCategory = ({ tag }) => {
    const params = useParams();
    const navigate = useNavigate();
    const { id } = params;

    function navigateToHome() {
        navigate(-1)
    }
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const allCategories = ads.map((ad) => (
        <AdCard
            category={ad.title}
            key={ad.id}
            ad={ad}
        ></AdCard>
    ));

    return <div>
        <div className="headerAllAds"><button onClick={navigateToHome}>back</button><Heading1>{id}</Heading1></div>
        <div className="AdsByCategory">{allCategories} {tag}</div>
    </div>
};

export default AllAdsByCategory;
