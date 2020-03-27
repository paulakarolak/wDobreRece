import React from 'react';
import { Link } from 'react-router-dom';
import Foundations from './Foundations';

const Entities = () => {
    return (
        <>
            <section className="entities-section" id="entities">
                <h2 className="section-header">Komu pomagamy?</h2>
                <div className="decoration"></div>
                <div className="entities-buttons">
                    <Link className="tile" to="/">
                        <button className="btn-alt active">
                            Fundacjom
                        </button>
                    </Link>
                    <Link className="tile" to="/">
                        <button className="btn-alt">
                            Organizacjom<br />pozarządowym
                        </button>
                    </Link>
                    <Link className="tile" to="/">
                        <button className="btn-alt">
                            Lokalnym<br />zbiórkom
                        </button>
                    </Link>
                </div>
                <Foundations />
            </section>
        </>
    )
}

export default Entities;