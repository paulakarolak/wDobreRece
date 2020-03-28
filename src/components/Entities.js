import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Foundations from './Foundations';
import Organizations from './Organizations';
import Collections from './Collections';

const Entities = () => {
    return (
        <>
            <section className="entities-section" id="entities">
                <h2 className="section-header">Komu pomagamy?</h2>
                <div className="decoration"></div>
                <Tabs defaultIndex={0} >
                    <TabList>
                        <Tab>Fundacjom</Tab>
                        <Tab>Organizacjom<br />pozarządowym</Tab>
                        <Tab>Lokalnym<br />zbiórkom</Tab>
                    </TabList>
                    <TabPanel><Foundations /></TabPanel>
                    <TabPanel><Organizations /></TabPanel>
                    <TabPanel><Collections /></TabPanel>
                </Tabs>
            </section>
        </>
    )
}

export default Entities;