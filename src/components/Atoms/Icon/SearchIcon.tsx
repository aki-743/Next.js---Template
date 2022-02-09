import classNames from 'classnames';
import { AiOutlineSearch } from 'react-icons/ai';
import { BaseIconProps } from '.';

const CheckIcon: React.VFC<BaseIconProps> = ({ id, className, size }) => {
  return <AiOutlineSearch id={id} className={classNames('text-cente', className)} size={size} />;
};

export default CheckIcon;
