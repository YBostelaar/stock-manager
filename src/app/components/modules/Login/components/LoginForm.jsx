import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router';
import { reduxForm, Field } from 'redux-form';
import { Input, Button } from 'common';
import _ from 'lodash/fp';
import cssModules from 'react-css-modules';

const LoginForm = ({ handleSubmit, login }) => (
    <form onSubmit={handleSubmit}>
        Login
        <div>
            <Field component={Input} name="email" type="email" />
        </div>
        <div>
            <Field component={Input} name="password" type="password" />
        </div>
        <Link to="/register">Registreer</Link>
        <Button onClick={login}>Submit</Button>
    </form>
);

LoginForm.propTypes = {
};

const withHOCs = _.flowRight([
    reduxForm({ form: 'login' }),
    cssModules(),
]);

export default withHOCs(LoginForm);
