import React, { Component } from 'react';
import StartHero from './StartHero';
import HeaderHomeLoggedIn from './HeaderHomeLoggedIn';
import StartIntroduction from './StartIntroduction';

export default class StartUser extends Component {
    render() {
        return (
            <>
                <section className="top-section grid-container">
                    <HeaderHomeLoggedIn />
                    <StartHero />
                    <StartIntroduction />
                </section>
            </>
        )
    }
}