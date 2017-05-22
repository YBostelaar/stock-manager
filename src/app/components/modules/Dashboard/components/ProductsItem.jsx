import React from 'react';
import PT from 'prop-types';
import cssModules from 'react-css-modules';
import styles from './ProductsItem.css';

const ProductsItem = () => (
    <div styleName="product">
        Productje
    </div>
);

ProductsItem.propTypes = {
    children: PT.string,
    type: PT.string,
    disabled: PT.bool,
    onClick: PT.func,
    center: PT.bool,
    right: PT.bool,
};

export default cssModules(styles)(ProductsItem);
