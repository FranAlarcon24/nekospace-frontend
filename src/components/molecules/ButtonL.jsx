import React from "react";
import Link from "../atoms/Link";

function ButtonL ({href, target='', children, ...props}) {
    return(
        <Link
        href={href}
        target={target}
        className="Button"
        >
            {children}
        </Link>

    );

};

export default ButtonL;