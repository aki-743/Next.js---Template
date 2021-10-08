import { GoAlert } from 'react-icons/go';
import styles from './AsyncError.module.scss';

const AsyncError: React.FC = () => {
  return (
    <div className={styles.root}>
      <GoAlert />
      <div className={styles.text}>
        <small>ネットワークエラーが発生しました</small>
      </div>
    </div>
  );
};

export default AsyncError;
