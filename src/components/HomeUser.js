import React, { Component } from 'react';
import StartUser from './StartUser';
import ThreeColumns from './ThreeColumns';
import FourSteps from './FourSteps';
import AboutUs from './AboutUs';
import FooterContact from './FooterContact';
import WeHelp from './WeHelp';
import fire from '../config/Fire';

export default class HomeUser extends Component {
    logout() {
        fire.auth().signOut();
    }
    render() {
        return (
            <>
                <button onClick={this.logout}>Wyloguj</button>
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