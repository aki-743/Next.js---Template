import classNames from 'classnames/bind';
import { IoIosAddCircle } from 'react-icons/io';
import { BaseIconProps } from '.';

const CancelIcon: React.VFC<BaseIconProps> = ({ id, className, size }) => {
  return <IoIosAddCircle id={id} className={classNames('text-center', className)} size={size} />;
};

export default CancelIcon;
