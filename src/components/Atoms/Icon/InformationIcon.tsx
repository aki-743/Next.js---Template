import { RiInformationFill } from 'react-icons/ri';
import { BaseIconProps } from '.';
import styles from './Icon.module.scss';

const InformationIcon: React.FC<BaseIconProps> = ({ size }) => {
  return <RiInformationFill className={styles.root} size={size} />;
};

export default InformationIcon;
