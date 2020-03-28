import React, { useState } from 'react';
import foundations from '../data-foundations';
import Entity from './Entity';
import Pagination from './Pagination';

const Foundations = () => {
    const [entities] = useState(foundations);
    const [currentPage, setCurrentPage] = useState(1);
    const [entitiesPerPage] = useState(3);

    //get current entities
    const indexOfLastEntity = currentPage * entitiesPerPage;
    const indexOfFirstEntity = indexOfLastEntity - entitiesPerPage;
    const currentEntity = entities.slice(indexOfFirstEntity, indexOfLastEntity);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <section className="entity-list" id="foundations">
            <div className="entity-description">
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <Entity entities={currentEntity} />
            {(() => {
                if (entities.length > 3) {
                    return (
                        <Pagination entitiesPerPage={entitiesPerPage} totalEntities={entities.length} paginate={paginate} />
                    )
                }
            })()}
        </section>
    )
}

export default Foundations;
