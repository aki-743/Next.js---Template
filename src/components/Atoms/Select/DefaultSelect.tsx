import { FormControl, Select, MenuItem } from '@mui/material';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { BaseSelectProps } from '.';
import styles from './Select.module.scss';

const DefaultSelect = forwardRef<HTMLDivElement, BaseSelectProps>(function render(
  { id, className, name, open, onOpen, onClose, value, elements, fullWidth, disabled, errors, onChange },
  ref,
) {
  return (
    <FormControl
      className={classNames(className, {
        'bg-default': disabled,
      })}
      ref={ref}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      <Select
        className={styles.select}
        id={id || name}
        open={open}
        onOpen={onOpen}
        onClose={onClose}
        name={name}
        value={value}
        error={Boolean(errors)}
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
});

export default DefaultSelect;
