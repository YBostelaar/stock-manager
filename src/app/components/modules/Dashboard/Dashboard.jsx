import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import { getProducts } from 'ducks/products';
import { logout } from 'ducks/user';
import cssModules from 'react-css-modules';
import { Button } from 'common';
import _ from 'lodash/fp';

class Dashboard extends React.Component {
    componentDidMount() {
        console.log('hoi');
        this.props.dispatch(getProducts());
    }

    handleLogout = () => {
        this.props.dispatch(logout());
    }

    render() {
        return (
            <section>
                Dashboard
                <Button onClick={this.handleLogout}>Logout</Button>
            </section>
        );
    }
};

Dashboard.propTypes = {
};

const withHOCs = _.flowRight([
    connect(({ products, user }) => ({ products, user })),
    cssModules(),
]);

export default withHOCs(Dashboard);
