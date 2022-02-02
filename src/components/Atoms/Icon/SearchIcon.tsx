import classNames from 'classnames';
import { AiOutlineSearch } from 'react-icons/ai';
import { BaseIconProps } from '.';

const CheckIcon: React.VFC<BaseIconProps> = ({ className, size }) => {
  return <AiOutlineSearch className={classNames('text-cente', className)} size={size} />;
};

export default CheckIcon;
