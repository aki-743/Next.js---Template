import { TextField } from "@material-ui/core";
import { ChangeEvent, useState } from "react";
import { validateEmail, validatePassowrd } from "../common/validate";

type Props = {
    label: string;
    value: string;
    fullWidth?: boolean;
    type?: string;
    disabled?: boolean;
    multiline?: boolean;
    rows?: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

type ValidateFunctionObj = {
    [key: string]: (value: string) => boolean;
}

const validateFunctionObj: ValidateFunctionObj = {
    "email": validateEmail,
    "password": validatePassowrd
}

const TextInput: React.FC<Props> = ({ label, value, type, fullWidth, disabled, multiline, rows, onChange }) => {
    const [error, setError] = useState(false);
    const validateFunction = validateFunctionObj[type];

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e);
        if (validateFunction(e.target.value)) {
            setError(false)
        } else {
            setError(true)
        }
    }

    return (
        <TextField
            label={label}
            value={value}
            fullWidth={fullWidth}
            type={type || "text"}
            error={error}
            variant="outlined"
            disabled={disabled}
            multiline={multiline}
            rows={rows || 1}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        />
    );
};

export default TextInput;
