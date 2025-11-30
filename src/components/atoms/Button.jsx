import React from "react";
import {Button as BotstrapButton} from 'react-bootstrap';

function Button({children,...props }){
    return <BotstrapButton {...props }>{children}</BotstrapButton>;
}
export default Button;