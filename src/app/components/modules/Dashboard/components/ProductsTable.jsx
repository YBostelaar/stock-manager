import React from 'react';
import PT from 'prop-types';
import cssModules from 'react-css-modules';
import { ProductsItem, TableHeader } from 'modules';
import styles from './ProductsTable.css';

const ProductsTable = () => (
    <div styleName="products">
        <TableHeader />
        <div styleName="table">
            <ProductsItem />
        </div>
    </div>
);

ProductsTable.propTypes = {
};

export default cssModules(styles)(ProductsTable);
