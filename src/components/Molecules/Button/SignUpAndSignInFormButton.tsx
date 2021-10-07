import { PrimaryButton } from '../../Atoms/Button';
import { BaseButtonProps } from '../../types/Button/props';
import styles from './SignUpAndSignInFormButton.module.scss';

const SignUpAndSignInFormButton: React.FC<BaseButtonProps> = (props) => {
  return (
    <div className={styles.root}>
      <PrimaryButton size="lg" {...props} />
    </div>
  );
};

export default SignUpAndSignInFormButton;
