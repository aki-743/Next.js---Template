import { FormInputLabel } from '../../Atoms/Label';
import { DisableDropdownPhoneInput } from '../../Atoms/PhoneInput';
import { BasePhoneInputProps } from '../../types/PhoneInput/props';
import { SignUpAndSignInFormButton } from '../Button';
import styles from './SignUpPhoneInput.module.scss';

const FORM_INPUT_LABEL = '携帯電話番号（ハイフン無しで入力）';

const SignUpPhoneInput: React.FC<BasePhoneInputProps> = (props) => {
  return (
    <div className={styles.root}>
      <h3>携帯電話番号の入力</h3>
      <div>セキュリティ対策のためにSMSが受取可能な携帯電話番号を入力して下さい。</div>
      <div className={styles['code-input']}>
        <FormInputLabel htmlFor="phone" label={FORM_INPUT_LABEL} />
        <DisableDropdownPhoneInput {...props} />
      </div>
      <SignUpAndSignInFormButton label="続ける" fullWidth={true} />
    </div>
  );
};

export default SignUpPhoneInput;
