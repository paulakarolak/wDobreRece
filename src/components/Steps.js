import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import step1 from '../assets/Icon-1.svg';
import step2 from '../assets/Icon-2.svg';
import step3 from '../assets/Icon-3.svg';
import step4 from '../assets/Icon-4.svg';


export default class Steps extends Component {
    render() {
        return (
            <section className="steps" id="steps">
                <h2 class="section-header">
                    Wystarczą 4 proste kroki
                </h2>
                <div className="decoration"></div>
                <div className="user-steps">
                    <div className="col">
                        <div class="row">
                            <img src={step1} height="83" alt="shirt" />
                        </div>
                        <div class="row">
                            <h5>Wybierz rzeczy</h5>
                        </div>
                        <div class="row">
                            <hr />
                        </div>
                        <div class="row">
                            <p>ubrania, zabawki, sprzęt i inne</p>
                        </div>
                    </div>
                    <div className="col">
                        <div class="row">
                            <img src={step2} height="83" alt="pack" />
                        </div>
                        <div class="row">
                            <h5>Spakuj je</h5>
                        </div>
                        <div class="row">
                            <hr />
                        </div>
                        <div class="row">
                            <p>skorzystaj z worków na śmieci</p>
                        </div>
                    </div>
                    <div className="col">
                        <div class="row">
                            <img src={step3} height="83" alt="magnifying-glass" />
                        </div>
                        <div class="row">
                            <h5>Zdecyduj komu chcesz pomóc</h5>
                        </div>
                        <div class="row">
                            <hr />
                        </div>
                        <div class="row">
                            <p>wybierz zaufane miejsce</p>
                        </div>
                    </div>
                    <div className="col">
                        <div class="row">
                            <img src={step4} height="83" alt="delivery" />
                        </div>
                        <div class="row">
                            <h5>Zamów kuriera</h5>
                        </div>
                        <div class="row">
                            <hr />
                        </div>
                        <div class="row">
                            <p>kurier przyjedzie w dogodnym terminie</p>
                        </div>
                    </div>
                </div>
                <Link className="tile" to="/logowanie">
                    <button className="btn-primary">
                        oddaj<br />rzeczy
                            </button>
                </Link>
            </section>
        )
    }
}