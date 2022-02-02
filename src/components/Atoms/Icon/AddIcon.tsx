import classNames from 'classnames/bind';
import { IoIosAddCircle } from 'react-icons/io';
import { BaseIconProps } from '.';

const CancelIcon: React.VFC<BaseIconProps> = ({ className, size }) => {
  return <IoIosAddCircle className={classNames('text-center', className)} size={size} />;
};

export default CancelIcon;
