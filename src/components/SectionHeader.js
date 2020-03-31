import React, { Component } from 'react';

export default class SectionHeader extends Component {
    render() {
        const { h2 } = this.props;
        return (
            <>
                <div className="section-header" id="section-header">
                    <h2 className="section-header-title">{h2}</h2>
                    <div className="decoration"></div>
                </div>
            </>
        )
    }
}