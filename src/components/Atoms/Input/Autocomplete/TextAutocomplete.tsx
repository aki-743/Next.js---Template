import { Autocomplete } from '@mui/material';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { BaseAutocompleteProps } from '..';
import styles from './Autocomplete.module.scss';

const TextAutocomplete = forwardRef<unknown, BaseAutocompleteProps>(function render(
  {
    id,
    className,
    options,
    groupBy,
    value,
    inputValue,
    getOptionLabel,
    isOptionEqualToValue,
    renderInput,
    filterOptions,
    noOptionsText,
    fullWidth,
    onChange,
  },
  ref,
) {
  return (
    <Autocomplete
      id={id}
      className={classNames(styles.root, className)}
      ref={ref}
      options={options}
      groupBy={groupBy}
      value={value}
      inputValue={inputValue}
      getOptionLabel={getOptionLabel}
      isOptionEqualToValue={isOptionEqualToValue}
      filterOptions={filterOptions}
      renderInput={renderInput}
      noOptionsText={noOptionsText || ''}
      blurOnSelect
      fullWidth={fullWidth}
      onChange={(_, data) => onChange(null, data)}
    />
  );
});

export default TextAutocomplete;
