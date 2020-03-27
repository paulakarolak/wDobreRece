import React from 'react';

const Foundations = () => {
    return (
        <section className="entity-list" id="foundations">
            <div className="entity-description">
                <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            </div>
            <div className="entity-details">
                <div className="entity-attributes">
                    <h4 className="entity-name">Fundacja "Dbam o Zdrowie"</h4>
                    <h6 className="entity-mission">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</h6>
                </div>
                <div className="entity-items">
                    <h5 className="item-list">ubrania, jedzenie, sprzęt AGD, meble, zabawki</h5>
                </div>
            </div>
            <div className="entity-details">
                <div className="entity-attributes">
                    <h4 className="entity-name">Fundacja “Dla dzieci”</h4>
                    <h6 className="entity-mission">Cel i misja: Pomoc dzieciom z ubogich rodzin.</h6>
                </div>
                <div className="entity-items">
                    <h5 className="item-list">ubrania, meble, zabawki</h5>
                </div>
            </div>
            <div className="entity-details">
                <div className="entity-attributes">
                    <h4 className="entity-name">Fundacja “Bez domu”</h4>
                    <h6 className="entity-mission">Cel i misja: Pomoc dla osób nie posiadających miejsca zamieszkania.</h6>
                </div>
                <div className="entity-items">
                    <h5 className="item-list">ubrania, jedzenie, ciepłe koce</h5>
                </div>
            </div>
            
            
        </section>
    )
}

export default Foundations;