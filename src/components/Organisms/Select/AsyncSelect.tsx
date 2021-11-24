import { FormControl, Select, MenuItem } from '@mui/material';
import { AsyncSelectProps } from '../../Atoms/Select';

const AsyncSelect = ({ id, name, labelId, value, elements, fullWidth, disabled, onChange }: AsyncSelectProps) => {
  return (
    <FormControl fullWidth={fullWidth} disabled={disabled}>
      <Select labelId={labelId} id={id || name} name={name} value={value} onChange={onChange}>
        {Object.keys(elements).map((key) => (
          <MenuItem key={key} value={elements[key]}>
            {key}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default AsyncSelect;
