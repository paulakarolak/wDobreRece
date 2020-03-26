import React from 'react';
import HomeHeader from './HomeHeader';
import { Link } from 'react-router-dom';

const LoggedOut = () => {
    return (
        <>
            <HomeHeader />
            <section className="logout-section">
                <h2 className="section-header">Wylogowanie nastąpiło<br />pomyślnie!</h2>
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

export default LoggedOut;