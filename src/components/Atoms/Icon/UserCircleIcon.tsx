import classNames from 'classnames';
import { FaRegUserCircle } from 'react-icons/fa';
import { BaseIconProps } from '.';

const UserCircleIcon: React.VFC<BaseIconProps> = ({ className, size }) => {
  return <FaRegUserCircle className={classNames('text-cente', className)} size={size} />;
};

export default UserCircleIcon;
