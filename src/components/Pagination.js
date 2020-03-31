import React, { Component } from 'react';

export default class Pagination extends Component {
    render() {
        const { WeHelpPerPage, totalWeHelp, paginate } = this.props;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(totalWeHelp / WeHelpPerPage); i++) {
            pageNumbers.push(i);
        };
        return (
            <nav>
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <button onClick={() => paginate(number)} className="btn-page">
                                {number}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}


