import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import WeHelpFoundations from './WeHelpFoundations';
import WeHelpOrganizations from './WeHelpOrganizations';
import WeHelpCollections from './WeHelpCollections';
import SectionHeader from './SectionHeader';

export default class WeHelp extends Component {
    render() {
        return (
            <>
                <section className="we-help-section" id="we-help">
                    <SectionHeader h2={"Komu pomagamy"} />
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