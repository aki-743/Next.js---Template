import { MdOutlineExpandMore } from 'react-icons/md';
import { BaseIconProps } from '.';

const ExpandMoreIcon: React.FC<BaseIconProps> = ({ size }) => {
  return <MdOutlineExpandMore size={size} />;
};

export default ExpandMoreIcon;
