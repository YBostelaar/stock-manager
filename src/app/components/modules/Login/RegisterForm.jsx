import React from 'react';
import PT from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Input, Button } from 'common';
import _ from 'lodash/fp';
import cssModules from 'react-css-modules';

const LoginForm = ({ handleSubmit, register }) => (
    <form onSubmit={handleSubmit}>
        Registreer
        <div>
            <Field component={Input} name="email" type="email" />
        </div>
        <div>
            <Field component={Input} name="password" type="password" />
        </div>
        <Button onClick={register}>Registreer</Button>
    </form>
);

LoginForm.propTypes = {
};

const withHOCs = _.flowRight([
    reduxForm({ form: 'register' }),
    cssModules(),
]);

export default withHOCs(LoginForm);
