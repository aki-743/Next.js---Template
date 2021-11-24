import { BaseTextProps } from '.';
import styles from './WarnText.module.scss';

const WarnText: React.FC<BaseTextProps> = ({ text }) => {
  return (
    <div className={styles.root} role="alert">
      {text}
    </div>
  );
};

export default WarnText;
