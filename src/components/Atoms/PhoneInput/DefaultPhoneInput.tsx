import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const DefaultPhoneInput: React.FC = () => {
  const country = 'jp';

  return (
    <PhoneInput
      country={country}
      placeholder=""
      autoFormat={false}
      disableDropdown={true}
      inputProps={{
        name: 'phone',
        required: true,
        autoFocus: true,
      }}
    />
  );
};

export default DefaultPhoneInput;
