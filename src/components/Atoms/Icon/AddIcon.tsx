import { IoIosAddCircle } from 'react-icons/io';
import { BaseIconProps } from '.';
import styles from './Icon.module.scss';

const CancelIcon = ({ size }: BaseIconProps) => {
  return <IoIosAddCircle className={styles.root} size={size} />;
};

export default CancelIcon;
