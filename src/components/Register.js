import React from 'react';
import AltHeader from './AltHeader';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <AltHeader />
            <section className="register-section">
                <h2 className="section-header">Załóż konto</h2>
                <div className="decoration"></div>
                <form id="login-form" name="login-form">
                    <div className="form-area">
                        <div className="form-row">
                            <label for="email">Email</label>
                            <input type="email" className="email" id="email" name="email" autoComplete="on" />
                        </div>
                        <div className="form-row form-pass">
                            <label for="pass">Hasło</label>
                            <input type="pass" className="pass" id="pass" name="pass" autoComplete="on" />
                        </div>
                        <div className="form-row">
                            <label for="pass">Powtórz hasło</label>
                            <input type="password" className="pass" id="pass" name="pass" autoComplete="on" />
                        </div>
                    </div>
                    <div className="form-buttons">
                        <Link className="tile" to="/logowanie">
                            <button className="btn-alt">
                                Zaloguj się
                            </button>
                        </Link>
                        <button className="btn-alt active">
                            Załóż konto
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register;