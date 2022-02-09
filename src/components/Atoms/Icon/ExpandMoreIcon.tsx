import classNames from 'classnames';
import { MdOutlineExpandMore } from 'react-icons/md';
import { BaseIconProps } from '.';

const ExpandMoreIcon: React.VFC<BaseIconProps> = ({ id, className, size }) => {
  return <MdOutlineExpandMore id={id} className={classNames('text-cente', className)} size={size} />;
};

export default ExpandMoreIcon;
