import React, { useState } from 'react';
import collections from '../data-collections';
import Entity from './Entity';
import Pagination from './Pagination';

const Collections = () => {
    const [entities] = useState(collections);
    const [currentPage, setCurrentPage] = useState(1);
    const [entitiesPerPage] = useState(3);

    //get current entities
    const indexOfLastEntity = currentPage * entitiesPerPage;
    const indexOfFirstEntity = indexOfLastEntity - entitiesPerPage;
    const currentEntity = entities.slice(indexOfFirstEntity, indexOfLastEntity);

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <section className="entity-list" id="collections">
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

export default Collections;