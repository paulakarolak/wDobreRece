import React from 'react';
import HomeMain from './HomeMain';
import HomeThreeColumns from './HomeThreeColumns';
import Steps from './Steps';
import AboutUs from './AboutUs';
import Contact from './Contact';

const Home = () => {
    return (
        <>
        <HomeMain />
        <HomeThreeColumns />
        <Steps />
        <AboutUs />
        <Contact />
        </>
    )
}

export default Home;