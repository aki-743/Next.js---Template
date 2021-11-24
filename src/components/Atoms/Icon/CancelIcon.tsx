import { MdCancel } from 'react-icons/md';
import { BaseIconProps } from '.';
import styles from './Icon.module.scss';

const CancelIcon: React.FC<BaseIconProps> = ({ size }) => {
  return <MdCancel className={styles.root} size={size} />;
};

export default CancelIcon;
