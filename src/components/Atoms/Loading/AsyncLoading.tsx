import ReactLoading from 'react-loading';
import styles from './AsyncLoading.module.scss';

/** dispatch以外の非同期処理中のローディング */
const AsyncLoading: React.FC = () => {
  return (
    <div className={styles.root}>
      <ReactLoading color="gray" type="bars" />
      <div className={styles.text}>
        <small>読み込み中</small>
      </div>
    </div>
  );
};

export default AsyncLoading;
