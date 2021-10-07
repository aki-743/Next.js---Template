import { DefaultCard } from '../../Atoms/Card';
import { SignUpAndSignInLogo } from '../../Molecules/Logo';
import styles from './SignUpAndSignInLayoutForm.module.scss';

type Props = {
  title: string;
};

const SignUpAndSignInLayoutForm: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={styles.root}>
      <SignUpAndSignInLogo />
      <DefaultCard>
        <form method="POST" action="/api/async" className={styles.form}>
          <div>
            <h3>{title}</h3>
          </div>
          {children}
        </form>
      </DefaultCard>
    </div>
  );
};

export default SignUpAndSignInLayoutForm;
