import classNames from 'classnames';
import { MdOutlineExpandLess } from 'react-icons/md';
import { BaseIconProps } from '.';

const ExpandLessIcon: React.VFC<BaseIconProps> = ({ className, size }) => {
  return <MdOutlineExpandLess className={classNames('text-center', className)} size={size} />;
};

export default ExpandLessIcon;
