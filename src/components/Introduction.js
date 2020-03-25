import React from 'react';
import { Link } from 'react-router-dom';


const Introduction = () => {
    return (
        <>
            <div className="introduction">
                <div className="info-section">
                    <h2 className="section-header">Zacznij pomagać!
                        <br />
                        Oddaj niechciane rzeczy w zaufane ręce
                    </h2>
                    <div className="decoration"></div>
                    <div className="tiles">
                        <Link className="tile" to="/logowanie">
                            <button className="btn-primary tile-1">
                                oddaj<br />rzeczy
                        </button>
                        </Link>
                        <Link className="tile" to="/logowanie">
                            <button className="btn-primary tile-2">
                                zorganizuj<br />zbiórkę
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Introduction;