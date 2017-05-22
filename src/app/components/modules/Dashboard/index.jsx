import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { getProducts } from 'ducks/products';
import { ProductsTable } from 'modules';
import cssModules from 'react-css-modules';
import _ from 'lodash/fp';
import styles from './styles.css';

class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(getProducts());
    }

    render() {
        return (
            <section styleName="dashboard">
                <h1 styleName="title">Producten</h1>
                <ProductsTable />
            </section>
        );
    }
}

Dashboard.propTypes = {
};

const withHOCs = _.flowRight([
    connect(({ products }) => ({ products })),
    cssModules(styles),
]);

export default withHOCs(Dashboard);
