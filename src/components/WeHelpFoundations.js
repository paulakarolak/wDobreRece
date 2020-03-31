import React, { useState } from 'react';
import foundations from '../data-foundations';
import EntitySingle from './EntitySingle';
import Pagination from './Pagination';

const WeHelpFoundations = () => {
    const [WeHelp] = useState(foundations);
    const [currentPage, setCurrentPage] = useState(1);
    const [WeHelpPerPage] = useState(3);
    //get current WeHelp
    const indexOfLastEntitySingle = currentPage * WeHelpPerPage;
    const indexOfFirstEntitySingle = indexOfLastEntitySingle - WeHelpPerPage;
    const currentEntitySingle = WeHelp.slice(indexOfFirstEntitySingle, indexOfLastEntitySingle);
    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <section className="entity-single-list" id="we-help-foundations">
            <div className="entity-single-description">
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
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
export default WeHelpFoundations;
