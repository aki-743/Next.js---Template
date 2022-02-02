import { BaseIconProps } from '.';
import { SiHackthebox } from 'react-icons/si';
import classNames from 'classnames';

const MerchandiseIcon: React.VFC<BaseIconProps> = ({ className, size }) => {
  return <SiHackthebox className={classNames('text-cente', className)} size={size} />;
};

export default MerchandiseIcon;
