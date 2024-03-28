import React from 'react';

const buttonStyle = {
    minWidth: '8rem',
    borderRadius: '.75rem',
    padding: '0',
    backgroundColor: 'transparent',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '1.25rem',
}

const spanStyle = {
    color: 'inherit',
    display: 'flex',
    height: '20px',
    justifyContent: 'center',
    borderRadius: 'inherit',
    minHeight: '4rem',
    padding: '0 2rem',
    lineHeight: '4rem',
};

const Button = ({ className, label, type }) => {
    return (
        <button className={className} type={type} style={buttonStyle}>
            <span style={spanStyle}>
                {label}
            </span>
        </button>
    );
};

export default Button;