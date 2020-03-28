import React, { useState } from 'react';
import organizations from '../data-organizations';
import Entity from './Entity';
import Pagination from './Pagination';

const Organizations = () => {
    const [entities] = useState(organizations);
    const [currentPage, setCurrentPage] = useState(1);
    const [entitiesPerPage] = useState(3);

    //get current entities
    const indexOfLastEntity = currentPage * entitiesPerPage;
    const indexOfFirstEntity = indexOfLastEntity - entitiesPerPage;
    const currentEntity = entities.slice(indexOfFirstEntity, indexOfLastEntity);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <section className="entity-list" id="organizations">
            <div className="entity-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
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

export default Organizations;