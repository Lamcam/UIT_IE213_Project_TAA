import React from 'react';


const Button = ({ className, label, type, backgroundColor, labelColor, fontSize, border, onClick }) => {
    const buttonStyle = {
        minWidth: '8rem',
        borderRadius: '8px',
        padding: '0',
        backgroundColor: backgroundColor || 'transparent',
        fontFamily: 'Roboto',
        fontSize: fontSize || '14px',
        border: border || '1px solid #857373',
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        whiteSpace: "nowrap",
    }
    
    const spanStyle = {
        color: labelColor || '#785B5B',
        borderRadius: 'inherit',
        minHeight: '40px',
        padding: '0 2rem',
        lineHeight: '40px',
    };
    return (
        <button className={className} type={type} style={buttonStyle} onClick={onClick}>
            <span style={spanStyle}>
                {label}
            </span>
        </button>
    );
};

export default Button;