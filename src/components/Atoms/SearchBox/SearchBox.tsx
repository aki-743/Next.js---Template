import { InputAdornment, TextField } from '@mui/material';
import { SearchBoxProps } from '../SearchBox';
import { SearchIcon } from '../Icon';

const SearchBox = ({ id, name, value, fullWidth, disabled, onChange }: SearchBoxProps) => {
  return (
    <TextField
      id={id || name}
      name={name}
      value={value}
      fullWidth={fullWidth}
      variant="outlined"
      disabled={disabled}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon size={20} />
          </InputAdornment>
        ),
      }}
      autoFocus={true}
      onChange={onChange}
    />
  );
};

export default SearchBox;
