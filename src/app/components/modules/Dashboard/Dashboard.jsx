import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { getProducts } from 'ducks/products';
import cssModules from 'react-css-modules';
import _ from 'lodash/fp';

class Dashboard extends React.Component {
    componentDidMount() {
        console.log('hoi');
        this.props.dispatch(getProducts());
    }

    render() {
        return (
            <section>
                Dashboard
                {this.props.products.data}
            </section>
        );
    }
};

Dashboard.propTypes = {
};

const withHOCs = _.flowRight([
    connect(({ products }) => ({ products })),
    cssModules(),
]);

export default withHOCs(Dashboard);
