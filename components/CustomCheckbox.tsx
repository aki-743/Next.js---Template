import { Checkbox, CheckboxProps, FormControlLabel } from '@material-ui/core';

interface Props extends CheckboxProps {
  label: string;
}

const CustomCheckbox: React.FC<Props> = ({ label, checked, onChange }) => {
  return <FormControlLabel control={<Checkbox checked={checked} onChange={onChange} name="checkedB" color="primary" />} label={label} />;
};

export default CustomCheckbox;
