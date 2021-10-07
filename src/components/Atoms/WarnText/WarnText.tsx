import { BaseWarnTextProps } from '../../types/WarnText/props';
import styles from './WarnText.module.scss';

const WarnText: React.FC<BaseWarnTextProps> = ({ message }) => {
  return (
    <div className={styles.root} role="alert">
      {message}
    </div>
  );
};

export default WarnText;
