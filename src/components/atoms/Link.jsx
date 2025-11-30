import React from "react";

function Link ({href, children, target = '', className = '',...props}) {
    return(
        <a
        href={href}
        target={target}
        rel={target == '_blank' ? 'nooper noreferrer' : undefined}
        className={`Link ${className}`}
        {...props}
        >
            {children}

        </a>

    );

}
export default Link;