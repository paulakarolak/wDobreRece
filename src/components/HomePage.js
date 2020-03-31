import React, { Component } from 'react';
import Start from './Start';
import ThreeColumns from './ThreeColumns';
import FourSteps from './FourSteps';
import AboutUs from './AboutUs';
import FooterContact from './FooterContact';
import WeHelp from './WeHelp';

export default class HomePage extends Component {
    render() {
        return (
            <>
                <Start />
                <ThreeColumns />
                <FourSteps />
                <AboutUs />
                <WeHelp />
                <FooterContact />
            </>
        )
    }
}