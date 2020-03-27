import React from 'react';
import HomeMain from './HomeMain';
import HomeThreeColumns from './HomeThreeColumns';
import Steps from './Steps';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Entities from './Entities';

const Home = () => {
    return (
        <>
        <HomeMain />
        <HomeThreeColumns />
        <Steps />
        <AboutUs />
        <Entities />
        <Contact />
        </>
    )
}

export default Home;