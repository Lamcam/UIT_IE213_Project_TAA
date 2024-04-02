import React from 'react';

const styles = {
    height: '4rem',
    borderRadius: '.75rem',
    border: '1px solid var(--md-sys-color-outline)',
    padding: '0 1rem',
    backgroundColor: 'transparent',
      
}


const Input = (props) => {
    return (
            <input 
            className={props.className}
            style={styles} 
            type={props.type}
            placeholder={props.placeholder}
            />
    );
};

export default Input;