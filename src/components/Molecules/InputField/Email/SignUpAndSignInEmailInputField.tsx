import { FormInputLabel } from '../../../Atoms/Label';
import { SignUpAndSignInEmailInput } from '../../Input';
import { BaseInputProps } from '../../../types/Input/props';

const FORM_INPUT_LABEL = 'メールアドレス';

const SignUpAndSignInEmailInputField: React.FC<BaseInputProps> = (props) => {
  return (
    <div>
      <FormInputLabel htmlFor={props.name} label={FORM_INPUT_LABEL} />
      <SignUpAndSignInEmailInput {...props} />
    </div>
  );
};

export default SignUpAndSignInEmailInputField;
