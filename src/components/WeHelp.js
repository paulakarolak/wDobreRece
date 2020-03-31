import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WeHelpFoundations from './WeHelpFoundations';
import WeHelpOrganizations from './WeHelpOrganizations';
import WeHelpCollections from './WeHelpCollections';

export default class WeHelp extends Component {
    render() {
        return (
            <>
                <section className="we-help-section" id="we-help">
                    <h2 className="section-header">Komu pomagamy?</h2>
                    <div className="decoration"></div>
                    <Tabs defaultIndex={0} >
                        <TabList>
                            <Tab>Fundacjom</Tab>
                            <Tab>Organizacjom<br />pozarządowym</Tab>
                            <Tab>Lokalnym<br />zbiórkom</Tab>
                        </TabList>
                        <TabPanel><WeHelpFoundations /></TabPanel>
                        <TabPanel><WeHelpOrganizations /></TabPanel>
                        <TabPanel><WeHelpCollections /></TabPanel>
                    </Tabs>
                </section>
            </>
        )
    }
}