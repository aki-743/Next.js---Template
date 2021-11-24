import { BaseTextProps } from '.';
import styles from './HelperText.module.scss';

const HelperText: React.FC<BaseTextProps> = ({ text }) => {
  return <span className={styles.root}>{text}</span>;
};

export default HelperText;
