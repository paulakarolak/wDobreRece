import React, { Component } from 'react';
import StartUser from './StartUser';
import ThreeColumns from './ThreeColumns';
import FourSteps from './FourSteps';
import AboutUs from './AboutUs';
import FooterContact from './FooterContact';
import WeHelp from './WeHelp';

export default class HomeUser extends Component {
    render() {
        return (
            <>
                <StartUser />
                <ThreeColumns />
                <FourSteps />
                <AboutUs />
                <WeHelp />
                <FooterContact />
            </>
        )
    }
}