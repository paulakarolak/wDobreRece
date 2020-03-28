import React from 'react';
import AltHeader from './AltHeader';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
            <AltHeader />
            <section className="logout-section">
                <h2 className="section-header">Strona o podanym adresie<br />nie istnieje.</h2>
                <div className="decoration"></div>
                    <Link className="tile" to="/">
                        <button className="btn-alt active">
                            Strona główna
                    </button>
                    </Link>
            </section>
        </>
    )
}

export default Error;