import React from 'react';
import AltHeader from './AltHeader';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <AltHeader />
            <section className="login-section">
                <h2 className="section-header">Zaloguj się</h2>
                <div className="decoration"></div>
                <form id="login-form" name="login-form">
                    <div className="form-area">
                        <div className="form-row">
                            <label for="email">Email</label>
                            <input type="email" className="email" id="email" name="email" autoComplete="on" />
                        </div>
                        <div className="form-row form-pass">
                            <label for="pass">Hasło</label>
                            <input type="password" className="pass" id="pass" name="pass" autoComplete="on" />
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
                </form>
            </section>
        </>
    )
}

export default Login;