import React from 'react';
// eslint-disable-next-line no-unused-vars
import styles from './style.scss';
import PropTypes from 'prop-types';

// ET: Note that this component could be expanded ie add more styles etc
// if there were more varied buttons in the design system

export const ButtonType = {
    BUTTON: 'button',
    RESET: 'reset',
    SUBMIT: 'submit',
}

export const ButtonStyle = {
    DEFAULT: 'default',
    ROUND: 'round',
}

export const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

const Button = ({ 
    type = ButtonType.BUTTON,
    buttonStyle = ButtonStyle.DEFAULT,
    size = ButtonSize.MEDIUM,
    disabled = false,
    onClick,
    children
    }) => {
    let classes = size + ' ' + buttonStyle + ' ';
    if (disabled) {
        classes += 'disabled ';
    }
    return (
        <button type={type} onClick={onClick} className={classes} disabled={disabled} buttonStyle={buttonStyle}>
            { children }
        </button>
    )
}

Button.propTypes = {
    style: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool
}

export default Button;

