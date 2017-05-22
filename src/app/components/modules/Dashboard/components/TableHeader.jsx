import React from 'react';
import PT from 'prop-types';
import cssModules from 'react-css-modules';
import styles from './TableHeader.css';

const TableHeader = () => (
    <header styleName="header">
        <ul styleName="items">
            <li>Apparaat</li>
            <li>Type</li>
            <li>Serienummer</li>
            <li>Afkomst</li>
        </ul>
    </header>
);

TableHeader.propTypes = {
};

export default cssModules(styles)(TableHeader);
