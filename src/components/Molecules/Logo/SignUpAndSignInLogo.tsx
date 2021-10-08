import { DefaultImage } from '../../Atoms/Image';
import Logo from '../../../assets/logo/db-RegisterAndLoginLogo.png';
import styles from './SignUpAndSignInLogo.module.scss';

const SignUpAndSignInLogo: React.FC = () => {
  return (
    <div className={styles.root}>
      <DefaultImage src={Logo} alt="SFSPロゴ" />
    </div>
  );
};

export default SignUpAndSignInLogo;
