import { FormInputLabel } from '../../../Atoms/Label';
import { SignUpAndSignInPasswordInput } from '../../Input';
import { BaseInputProps, SignUpPasswordInputProps } from '../../../types/Input/props';

const InputPassword1: React.FC<BaseInputProps> = (props) => {
  const FORM_INPUT_LABEL = 'パスワード';

  return (
    <div>
      <FormInputLabel htmlFor="password1" label={FORM_INPUT_LABEL} />
      <SignUpAndSignInPasswordInput {...props} />
    </div>
  );
};

const InputPassword2: React.FC<BaseInputProps> = (props) => {
  const FORM_INPUT_LABEL = '確認用パスワード';

  return (
    <div>
      <FormInputLabel htmlFor="password2" label={FORM_INPUT_LABEL} />
      <SignUpAndSignInPasswordInput {...props} />
    </div>
  );
};

const SignUpPasswordInputField: React.FC<SignUpPasswordInputProps> = ({
  password1,
  password2,
  fullWidth,
  disabled,
  onChangePassword1,
  onChangePassword2,
}) => {
  return (
    <>
      <InputPassword1 value={password1} fullWidth={fullWidth} disabled={disabled} onChange={onChangePassword1} />
      <InputPassword2 value={password2} fullWidth={fullWidth} disabled={disabled} onChange={onChangePassword2} />
    </>
  );
};
export default SignUpPasswordInputField;
