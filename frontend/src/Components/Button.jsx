import React from 'react';

const Button = ({ className, label, type }) => {
    return (
        <button className={className} type={type}>
            <span className='status-layer'>
                {label}
            </span>
        </button>
    );
};

export default Button;