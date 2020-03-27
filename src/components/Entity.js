import React from 'react';

const Entity = ({ entities }) => {
    return (
        <>
            {entities.map(entity => (
                <>
                    <div className="entity-details">
                        <div className="entity-attributes">
                            <h4 key={entity.id} className="entity-name">Fundacja {entity.name}</h4>
                            <h6 key={entity.name} className="entity-mission">Cel i misja: {entity.mission}</h6>
                        </div>
                        <div className="entity-items">
                            <h5 key={entity.items} className="item-list">{entity.items}</h5>
                        </div>
                    </div>
                </ >
            ))}
        </>
    )
}
export default Entity;
