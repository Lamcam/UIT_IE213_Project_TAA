import React from 'react';

const ButtonIcon = ({ className, label, type, onClick, height, width, backgroundColor, marginRight, border }) => {
    const buttonIconStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: height||'40px',
        width: width||'40px',
        borderRadius: '0.75rem',
        border: border|| '1px solid #785B5B',
        padding: 0,
        backgroundColor: backgroundColor,
        marginRight: marginRight,
    }
    return (
        <button className={className} type={type} style={buttonIconStyle} onClick={onClick}>
            {label}
        </button>
    );
};
export default ButtonIcon
