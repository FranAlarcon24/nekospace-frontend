import React from "react";


function Input({type = 'text', placeholder, value, onChange, ...props}){
    return(
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{ borderRadius: '12px', border: '1px solid #ccc', padding: '8px' }}
            {...props}
        />
    )
}

export default Input;