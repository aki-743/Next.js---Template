import classNames from 'classnames';
import { MdCancel } from 'react-icons/md';
import { BaseIconProps } from '.';

const CancelIcon: React.VFC<BaseIconProps> = ({ className, size }) => {
  return <MdCancel className={classNames('text-center', className)} size={size} />;
};

export default CancelIcon;
