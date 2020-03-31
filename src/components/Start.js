import React, { Component } from 'react';
import StartHero from './StartHero';
import HeaderHome from './HeaderHome';
import StartIntroduction from './StartIntroduction';

export default class Start extends Component {
    render() {
        return (
            <>
                <section className="top-section grid-container">
                    <HeaderHome />
                    <StartHero />
                    <StartIntroduction />
                </section>
            </>
        )
    }
}