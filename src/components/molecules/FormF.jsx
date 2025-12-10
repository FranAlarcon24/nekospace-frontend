import React from "react";
import Label from "../atoms/Label";
import Input from "../atoms/Input";

function FormF ({label, id, type, placeholder, value, onChange, name, options}) {
    if (type === 'textarea') {
            return(
                <div>
                    <Label htmlFor={id}>{label}</Label>
                    <textarea
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        value={value ?? ''}
                        onChange={onChange}
                        name={name}
                    />
            </div>

        );
    }
    if (type === 'select') {
        return(
                <div>
                    <Label htmlFor={id}>{label}</Label>
                    <select
                        id={id}
                        value={value ?? ''}
                        onChange={onChange}
                        name={name}
                    >
                        {options && options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label  }
                            </option>
                        ))}
                    </select>
            </div>
        );
    }
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