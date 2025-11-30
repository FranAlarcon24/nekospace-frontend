import React from "react";

function image (im, alt, className='') {
    return (
        <img
        src={im}
        alt={alt}
        className={className}
        />
    )
}
export default image;