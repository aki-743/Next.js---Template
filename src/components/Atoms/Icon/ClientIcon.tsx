import classNames from 'classnames';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { BaseIconProps } from '.';

const ClientIcon: React.VFC<BaseIconProps> = ({ id, className, size }) => {
  return <BsFillPersonLinesFill id={id} className={classNames('text-center', className)} size={size} />;
};

export default ClientIcon;
