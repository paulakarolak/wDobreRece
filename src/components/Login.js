import React from 'react';
import HomeHeader from './HomeHeader';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <HomeHeader />
            <section className="login-section">
                <h2 className="section-header">Zaloguj się</h2>
                <div className="decoration"></div>
                <div className="form-area">
                    <div className="form-row">
                        <label for="email">Email</label>
                        <input type="email" className="email" id="email" name="email" autoComplete="on" />
                    </div>
                    <div className="form-row form-pass">
                        <label for="pass">Hasło</label>
                        <input type="pass" className="pass" id="pass" name="pass" autoComplete="on" />
                    </div>
                </div>
                <div className="form-buttons">
                    <Link className="tile" to="/rejestracja">
                        <button className="btn-alt">
                            Założ konto
                    </button>
                    </Link>
                    <button className="btn-alt active">
                        Zaloguj się
                    </button>
                </div>
            </section>
        </>
    )
}

export default Login;