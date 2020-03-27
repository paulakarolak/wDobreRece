import React from 'react';

const Pagination = ({ entitiesPerPage, totalEntities, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalEntities / entitiesPerPage); i++) {
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

export default Pagination;
