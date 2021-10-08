import { FormInputLabel } from '../../../Atoms/Label';
import { SignUpAndSignInPasswordInput } from '../../Input';
import { BaseInputProps } from '../../../types/Input/props';

const FORM_INPUT_LABEL = 'パスワード';

const SignInPasswordInputField: React.FC<BaseInputProps> = (props) => {
  return (
    <div>
      <FormInputLabel htmlFor={props.name} label={FORM_INPUT_LABEL} />
      <SignUpAndSignInPasswordInput {...props} />
    </div>
  );
};

export default SignInPasswordInputField;
