import { Checkbox } from '@mui/material';
import { BaseCheckboxProps } from '.';

const PrimaryCheckbox: React.FC<BaseCheckboxProps> = (props) => {
  return <Checkbox {...props} />;
};

export default PrimaryCheckbox;
