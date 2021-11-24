import { FormControlLabel } from '@mui/material';
import { PrimaryCheckbox, CheckboxWithLabelProps } from '../../Atoms/Checkbox';
import { InputValidateError } from '../../Atoms/Error';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

const PrimaryCheckboxWithLable: React.FC<CheckboxWithLabelProps> = ({ label, checked, disabled, name, errors, onChange }) => {
  const className = cx({
    disabled: disabled,
  });

  return (
    <div className={className}>
      <FormControlLabel control={<PrimaryCheckbox checked={checked} onChange={onChange} name={name} />} disabled={disabled} label={label} />
      <InputValidateError errors={errors} />
    </div>
  );
};

export default PrimaryCheckboxWithLable;
