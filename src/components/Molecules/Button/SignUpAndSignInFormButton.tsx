import { PrimaryButton } from '../../Atoms/Button';
import { BaseButtonProps } from '../../types/Button/props';

const SignUpAndSignInFormButton: React.FC<BaseButtonProps> = (props) => {
  return (
    <div>
      <PrimaryButton size="lg" {...props} />
    </div>
  );
};

export default SignUpAndSignInFormButton;
