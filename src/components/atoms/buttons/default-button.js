import React from 'react';
import styles from './style.scss';

// ET: Note that this component could be expanded ie add more styles etc
// if there were more varied buttons in the design system

export const ButtonType = {
    BUTTON: 'button',
    RESET: 'reset',
    SUBMIT: 'submit',
}

export const ButtonStyle = {
    DEFAULT: 'default',
}

export const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
}

export const hasFill = true;

export const hasBorder = false;

const Button = ({ props }) => {
    const { type, onClick, children, size, disabled } = props;
    let classes = 'button ' + size + ' ';
    if (disabled) {
        classes += 'disabled ';
    }
    return (
        <button type={type} onClick={onClick} className={classes}>
            { children }
        </button>
    )
}

Button.defaultProps = {
    type: ButtonType.BUTTON,
    style: ButtonStyle.DEFAULT,
    size: ButtonSize.MEDIUM,
    onClick: () => {},
    className: '',
    disabled: false
}

export default Button;

