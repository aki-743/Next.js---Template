import styles from './SignUpAndSignInLayoutWrapper.module.scss';

const SignUpAndSignInLayoutWrapper: React.FC = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};

export default SignUpAndSignInLayoutWrapper;
