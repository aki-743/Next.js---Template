import classNames from 'classnames';
import { AiFillCheckCircle } from 'react-icons/ai';
import { BaseIconProps } from '.';

const CheckIcon: React.VFC<BaseIconProps> = ({ className, size }) => {
  return <AiFillCheckCircle className={classNames('text-center', className)} size={size} />;
};

export default CheckIcon;
