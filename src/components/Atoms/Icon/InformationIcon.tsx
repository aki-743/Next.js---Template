import classNames from 'classnames';
import { RiInformationFill } from 'react-icons/ri';
import { BaseIconProps } from '.';

const InformationIcon: React.VFC<BaseIconProps> = ({ className, size }) => {
  return <RiInformationFill className={classNames('text-cente', className)} size={size} />;
};

export default InformationIcon;
