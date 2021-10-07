import { AiFillCheckCircle } from 'react-icons/ai';
import styles from './SuccessCheck.module.scss';

const SuccessCheck: React.FC = () => {
  return (
    <div className={styles.root}>
      <AiFillCheckCircle size={64} color={'00e676'} />
    </div>
  );
};

export default SuccessCheck;
