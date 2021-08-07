import { TextField } from "@material-ui/core";
import { ChangeEvent } from "react";

type Props = {
    label: string;
    value: string | {};
    fullWidth?: boolean;
    type?: string;
    disabled?: boolean;
    multiline?: boolean;
    rows?: number;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<Props> = ({ label, value, type, fullWidth, disabled, multiline, rows, onChange }) => {
    return (
        <TextField
            label={label}
            value={value}
            fullWidth={fullWidth}
            type={type || "text"}
            variant="outlined"
            disabled={disabled}
            multiline={multiline}
            rows={rows || 1}
            onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
    );
};

export default TextInput;
