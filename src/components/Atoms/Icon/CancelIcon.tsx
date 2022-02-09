import classNames from 'classnames';
import { MdCancel } from 'react-icons/md';
import { BaseIconProps } from '.';

const CancelIcon: React.VFC<BaseIconProps> = ({ id, className, size }) => {
  return <MdCancel id={id} className={classNames('text-center', className)} size={size} />;
};

export default CancelIcon;
