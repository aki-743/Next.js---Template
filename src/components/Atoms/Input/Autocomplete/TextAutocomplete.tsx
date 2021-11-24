import { Autocomplete } from '@mui/material';
import { BaseAutocompleteProps } from '..';
import styles from './Autocomplete.module.scss';

const ClearableAutocomplete = ({
  options,
  value,
  inputValue,
  getOptionLabel,
  isOptionEqualToValue,
  renderInput,
  filterOptions,
  noOptionsText,
  fullWidth,
  onChange,
}: BaseAutocompleteProps) => {
  return (
    <Autocomplete
      className={styles.root}
      options={options}
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
};

export default ClearableAutocomplete;
