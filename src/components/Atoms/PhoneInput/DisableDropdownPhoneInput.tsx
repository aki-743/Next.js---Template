import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { BasePhoneInputProps } from '../../types/PhoneInput/props';

const DisableDropdownPhoneInput: React.FC<BasePhoneInputProps> = ({ defaultCountry = 'jp', onChange }) => {
  return (
    <PhoneInput
      country={defaultCountry}
      placeholder=""
      autoFormat={false}
      disableDropdown={true}
      inputProps={{
        name: 'phone',
        required: true,
        autoFocus: true,
      }}
      onChange={onChange}
    />
  );
};

export default DisableDropdownPhoneInput;
