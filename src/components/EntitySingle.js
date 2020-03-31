import React, { Component } from 'react';

export default class EntitySingle extends Component {
    render() {
        const { WeHelp } = this.props;
        return (
            <>
                {WeHelp.map(EntitySingle => (
                    <>
                        <div className="entity-single-details">
                            <div className="entity-single-attributes">
                                <h4 key={EntitySingle.id} className="entity-single-name">{EntitySingle.name}</h4>
                                <h6 key={EntitySingle.name} className="entity-single-mission">Cel i misja: {EntitySingle.mission}</h6>
                            </div>
                            <div className="entity-single-items">
                                <h5 key={EntitySingle.items} className="item-list">{EntitySingle.items}</h5>
                            </div>
                        </div>
                    </ >
                ))}
            </>
        )
    }
}