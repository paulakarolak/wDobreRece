import React, { Component } from 'react';
import HeroMain from './HeroMain';
import HomeHeader from './HomeHeader';
import Introduction from './Introduction';

export default class HomeMain extends Component {
    render() {
        return (
            <>
                <section className="top-section grid-container">
                    <HomeHeader />
                    <HeroMain />
                    <Introduction />
                </section>
            </>
        )
    }
}