import React, { Component } from 'react';

export default class SectionHeader extends Component {
    render() {
        const { sectionHeader } = this.props;
        return (
            <>
                <div className="section-header" id="section-header">
                    <h2 className="section-header">{sectionHeader}</h2>
                    <div className="decoration"></div>
                </div>
            </>
        )
    }
}