import { CodeInput } from '../../Atoms/CodeInput';
import { AnchorLink } from '../../Atoms/Link';
import { BaseCodeInputProps } from '../../types/CodeInput/props';
import { SignUpAndSignInFormButton } from '../Button';
import styles from './SignUpAndSignInCodeInput.module.scss';

const SignUpAndSignInOcdeInput: React.FC<BaseCodeInputProps> = (props) => {
  const { address, verificationName, fields = 6 } = props;

  return (
    <div className={styles.root}>
      <h3>{verificationName}</h3>
      <div>
        {address}に送信された{fields}桁のコードを入力して下さい。
      </div>
      <div>
        コードが届いていませんか？
        <AnchorLink label="再送" />
      </div>
      <div className={styles['code-input']}>
        <CodeInput {...props} />
      </div>
      <SignUpAndSignInFormButton label="続ける" fullWidth={true} />
    </div>
  );
};

export default SignUpAndSignInOcdeInput;
