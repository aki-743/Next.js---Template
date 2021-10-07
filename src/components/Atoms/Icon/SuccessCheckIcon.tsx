import { AiFillCheckCircle } from 'react-icons/ai';
import styles from './SuccessCheckIcon.module.scss';

const SuccessCheckIcon: React.FC = () => {
  return (
    <div className={styles.root}>
      <AiFillCheckCircle size={64} color={'00e676'} />
    </div>
  );
};

export default SuccessCheckIcon;
