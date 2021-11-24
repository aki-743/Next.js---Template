import { AiOutlineSearch } from 'react-icons/ai';
import { BaseIconProps } from '.';
import styles from './Icon.module.scss';

const CheckIcon: React.FC<BaseIconProps> = ({ size }) => {
  return <AiOutlineSearch className={styles.root} size={size} />;
};

export default CheckIcon;
