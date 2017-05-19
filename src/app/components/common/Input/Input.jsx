import React from 'react';
import PT from 'prop-types';
import cssModules from 'react-css-modules';

const Input = ({ input, type = 'text', placeholder, meta: { touched, error, submitFailed } }) => (
    <input
        {...input}
        id={input.name}
        type={type}
        placeholder={placeholder}
    />
);

Input.propTypes = {
    input: PT.shape({}),
    meta: PT.shape({}),
    placeholder: PT.string,
    type: PT.string,
};

export default cssModules()(Input);
