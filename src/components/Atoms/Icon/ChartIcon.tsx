import classNames from 'classnames';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { BaseIconProps } from '.';

const ChartIcon: React.VFC<BaseIconProps> = ({ className, size }) => {
  return <AiOutlineAreaChart className={classNames('text-center', className)} size={size} />;
};

export default ChartIcon;
