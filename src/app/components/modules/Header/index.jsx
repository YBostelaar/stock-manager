import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import cssModules from 'react-css-modules';
import { Button } from 'common';
import { logout } from 'ducks/user';
import Logo from 'vectors/logo.svg';
import _ from 'lodash/fp';
import styles from './styles.css';

class Header extends React.Component {
    handleLogout = () => {
        this.props.dispatch(logout());
    }

    render() {
        return (
            <header styleName="header">
                <Logo />
                <Button onClick={this.handleLogout}>Logout</Button>
            </header>
        );
    }
}

Header.propTypes = {
};

const withHOCs = _.flowRight([
    connect(({ user }) => ({ user })),
    cssModules(styles),
]);

export default withHOCs(Header);
