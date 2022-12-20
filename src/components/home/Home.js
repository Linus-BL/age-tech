import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Heading1 from '../textComponents/Heading1'
import Heading5 from '../textComponents/Heading5';
import { MdOutlineLocationOn } from "react-icons/md";
import TagsSection from '../atomics/TagsSection'
import BodyText from '../textComponents/BodyText';
import CategorySection from '../atomics/CategorySection';
import testImage from '../../ad_test.jpg'
import Button from '../atomics/Button';
import Header from './Header';
import TagSection from '../atomics/TagsSection';
import AllCategories from './AllCategories';

const ads = [{
    id: 1,
    title: "Baka hos mig",
    description: "Kom och baka",
    image: testImage,
    location: "Skultunaparken",
    date: "20 november",
    points: 23
}, {
    id: 2,
    title: "snickra hos mig",
    description: "Kom och baka",
    image: testImage,
    location: "Skultunaparken",
    date: "20 november",
    points: 23
},
{
    id: 3,
    title: "snickra hos mig",
    description: "Kom och baka",
    image: testImage,
    location: "Skultunaparken",
    date: "20 november",
    points: 23
},
{
    id: 4,
    title: "snickra hos mig",
    description: "Kom och baka",
    image: testImage,
    location: "Skultunaparken",
    date: "20 november",
    points: 23
}]


const tags = [{ id: 1, tagName: "Stickning" },
{ id: 2, tagName: "Måla" },
{ id: 3, tagName: "Motorcross" },
{ id: 4, tagName: "Fest" },
{ id: 5, tagName: "Snickeri" },
{ id: 6, tagName: "Bakning" }]

const bio = "Hej mitt namn är Carina och jag är nyligen pensionerad. Jag har alltid haft en passion för bakning och snickeri och nu när jag är pensionerad så vill jag gärna dela med mig av mina kunskper. "



export default function Home() {
    const navigate = useNavigate();
    const { currentUser } = useAuth();

    return (
        <div className="homePage">
            <Header></Header>
            <div className="mainContent">
                <TagSection sectionTitle="Kolla in dessa" tags={tags}></TagSection>
                <CategorySection ads={ads}></CategorySection>
                <AllCategories categories={tags}></AllCategories>
            </div>
        </div>
    );
}
