import React from 'react';
import { connect } from 'react-redux';
import PT from 'prop-types';
import cssModules from 'react-css-modules';
import { RegisterForm } from 'modules';
import { register } from 'ducks/user';
import _ from 'lodash/fp';
import styles from './Login.css';

const Login = props => (
    <section>
        <RegisterForm register={props.register} />
    </section>
);

Login.propTypes = {
};

const withHOCs = _.flowRight([
    connect(({ user }) => ({ user }), { register }),
    cssModules(styles),
]);

export default withHOCs(Login);
