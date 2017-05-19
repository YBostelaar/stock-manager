import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import cssModules from 'react-css-modules';
import { LoginForm } from 'modules';
import { register, login } from 'ducks/user';
import _ from 'lodash/fp';
import styles from './Login.css';

const Login = props => (
    <section>
        <LoginForm register={props.register} login={props.login} />
    </section>
);

Login.propTypes = {
};

const withHOCs = _.flowRight([
    connect(({ user }) => ({ user }), { register, login }),
    cssModules(styles),
]);

export default withHOCs(Login);
