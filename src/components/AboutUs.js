import React from 'react';
import signature from '../assets/Signature.svg';

const AboutUs = () => {
    return (
        <section className="about grid-container" id="about">
            <div className="about-us">
                <h2 className="section-header">O nas</h2>
                <div className="decoration"></div>
                <div className="description">
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                </div>
                <div className="signature">
                    <img src={signature} alt="signature" />
                </div>

            </div>
            <div className="people"></div>
        </section>
    )
}

export default AboutUs;