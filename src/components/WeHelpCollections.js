import React, { useState } from 'react';
import collections from '../data-collections';
import EntitySingle from './EntitySingle';
import Pagination from './Pagination';

const WeHelpCollections = () => {
    const [WeHelp] = useState(collections);
    const [currentPage, setCurrentPage] = useState(1);
    const [WeHelpPerPage] = useState(3);
    //get current WeHelp
    const indexOfLastEntitySingle = currentPage * WeHelpPerPage;
    const indexOfFirstEntitySingle = indexOfLastEntitySingle - WeHelpPerPage;
    const currentEntitySingle = WeHelp.slice(indexOfFirstEntitySingle, indexOfLastEntitySingle);
    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <section className="entity-single-list" id="we-help-collections">
            <div className="entity-single-description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            </div>
            <EntitySingle WeHelp={currentEntitySingle} />
            {(() => {
                if (WeHelp.length > 3) {
                    return (
                        <Pagination WeHelpPerPage={WeHelpPerPage} totalWeHelp={WeHelp.length} paginate={paginate} />
                    )
                }
            })()}
        </section>
    )
}
export default WeHelpCollections;