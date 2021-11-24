import { FormControl, Select, MenuItem } from '@mui/material';
import classNames from 'classnames/bind';
import { BaseSelectProps } from '.';
import styles from './Select.module.scss';

const cx = classNames.bind(styles);

const DefaultSelect = ({ id, name, open, onOpen, onClose, labelId, value, elements, fullWidth, disabled, onChange }: BaseSelectProps) => {
  const className = cx({
    disabled: disabled,
  });

  return (
    <FormControl className={className} fullWidth={fullWidth} disabled={disabled}>
      <Select
        className={styles.select}
        labelId={labelId}
        id={id || name}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        name={name}
        value={value}
        onChange={onChange}
      >
        {elements &&
          Object.keys(elements).map((key) => (
            <MenuItem key={key} value={key}>
              {elements[key]}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default DefaultSelect;
