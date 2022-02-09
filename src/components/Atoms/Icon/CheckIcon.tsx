import classNames from 'classnames';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BaseIconProps } from '.';

const CheckIcon: React.VFC<BaseIconProps> = ({ id, className, size }) => {
  return <AiFillCheckCircle id={id} className={classNames('text-center', className)} size={size} />;
};

export default CheckIcon;
