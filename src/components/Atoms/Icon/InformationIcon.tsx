import classNames from 'classnames';
import { RiInformationFill } from 'react-icons/ri';
import { BaseIconProps } from '.';

const InformationIcon: React.VFC<BaseIconProps> = ({ id, className, size }) => {
  return <RiInformationFill id={id} className={classNames('text-cente', className)} size={size} />;
};

export default InformationIcon;
