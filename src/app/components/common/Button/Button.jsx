import React from 'react';
import PT from 'prop-types';
import cssModules from 'react-css-modules';

const Button = ({ children, type = 'button', disabled, onClick, center, right }) => (
    <button
        disabled={disabled}
        type={type}
        onClick={onClick}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PT.string,
    type: PT.string,
    disabled: PT.bool,
    onClick: PT.func,
    center: PT.bool,
    right: PT.bool,
};

export default cssModules()(Button);
