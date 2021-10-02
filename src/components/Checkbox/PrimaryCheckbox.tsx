import { Checkbox, FormControlLabel } from '@mui/material';
import { BaseCheckboxProps } from '../types/checkbox';

const PrimaryCheckbox: React.FC<BaseCheckboxProps> = ({ label, checked, onChange }) => {
  return <FormControlLabel control={<Checkbox checked={checked} onChange={onChange} name="checkedB" color="primary" />} label={label} />;
};

export default PrimaryCheckbox;
