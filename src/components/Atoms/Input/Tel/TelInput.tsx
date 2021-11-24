import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { TelInputProps } from '..';
import styles from '../Input.module.scss';

const TelInput = ({ name, value, placeholder, disabled, onChange }: TelInputProps) => {
  return (
    <div className={styles.root}>
      <PhoneInput
        country="jp"
        value={value}
        placeholder={placeholder}
        autoFormat={false}
        disabled={disabled}
        disableCountryCode={true}
        disableDropdown={true}
        inputProps={{
          name: name,
        }}
        onChange={onChange}
      />
    </div>
  );
};

export default TelInput;
