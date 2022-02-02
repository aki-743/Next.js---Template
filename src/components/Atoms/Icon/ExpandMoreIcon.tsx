import classNames from 'classnames';
import { MdOutlineExpandMore } from 'react-icons/md';
import { BaseIconProps } from '.';

const ExpandMoreIcon: React.VFC<BaseIconProps> = ({ className, size }) => {
  return <MdOutlineExpandMore className={classNames('text-cente', className)} size={size} />;
};

export default ExpandMoreIcon;
