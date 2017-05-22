import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { getProducts } from 'ducks/products';
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
                Dashboard
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
