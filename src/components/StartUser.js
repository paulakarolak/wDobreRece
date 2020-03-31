import React, { Component } from 'react';
import StartHero from './StartHero';
import HeaderHome from './HeaderHome';
import StartIntroduction from './StartIntroduction';

export default class StartUser extends Component {
    render() {
        return (
            <>
                <h1 className="logged-in">Hello user</h1>
                <section className="top-section grid-container">
                    <HeaderHome />
                    <StartHero />
                    <StartIntroduction />
                </section>
            </>
        )
    }
}