import React from 'react';
import PT from 'prop-types';
import cssModules from 'react-css-modules';
import { Input } from 'common';
import styles from './styles.css';

const Sidebar = () => (
    <aside styleName="sidebar">
        <h2>Filter</h2>
        {/* <Input placeholder="Zoeken" name="search" type="text" /> */}
    </aside>
);

Sidebar.propTypes = {
};

export default cssModules(styles)(Sidebar);
