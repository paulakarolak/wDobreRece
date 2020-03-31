import React, { Component } from 'react';

export default class ThreeColumns extends Component {
    render() {
        return (
            <section className="yellow-section">
                <div className="col">
                    <div className="row number">
                        <h2>10</h2>
                    </div>
                    <div className="row title">
                        <h3>oddanych worków</h3>
                    </div>
                    <div className="row description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="row number">
                        <h2>5</h2>
                    </div>
                    <div className="row title">
                        <h3>wspartych organizacji</h3>
                    </div>
                    <div className="row description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
                <div className="col">
                    <div className="row number">
                        <h2>7</h2>
                    </div>
                    <div className="row title">
                        <h3>zorganizowanych zbiórek</h3>
                    </div>
                    <div className="row description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
            </section>
        )
    }
}