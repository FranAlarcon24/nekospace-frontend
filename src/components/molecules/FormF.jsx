import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

function FormF ({label, id, type, placeholder, value, onChange, name}) {
    return(
        <div>
            <Label htmlFor={id}>{label}</Label>
            <Input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
        </div>

    );
}

export default FormF;