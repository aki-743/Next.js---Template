import classNames from 'classnames';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BaseIconProps } from '.';

const ClientIcon: React.VFC<BaseIconProps> = ({ className, size }) => {
  return <BsFillPersonLinesFill className={classNames('text-center', className)} size={size} />;
};

export default ClientIcon;
