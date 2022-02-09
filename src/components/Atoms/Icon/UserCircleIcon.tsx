import classNames from 'classnames';
import { FaRegUserCircle } from 'react-icons/fa';
import { BaseIconProps } from '.';

const UserCircleIcon: React.VFC<BaseIconProps> = ({ id, className, size }) => {
  return <FaRegUserCircle id={id} className={classNames('text-cente', className)} size={size} />;
};

export default UserCircleIcon;
