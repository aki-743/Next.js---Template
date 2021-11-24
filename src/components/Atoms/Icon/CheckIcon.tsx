import { AiFillCheckCircle } from 'react-icons/ai';
import { BaseIconProps } from '.';
import styles from './Icon.module.scss';

const CheckIcon: React.FC<BaseIconProps> = ({ size }) => {
  return <AiFillCheckCircle className={styles.root} size={size} />;
};

export default CheckIcon;
