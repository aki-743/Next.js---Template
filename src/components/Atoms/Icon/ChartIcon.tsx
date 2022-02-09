import classNames from 'classnames';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { BaseIconProps } from '.';

const ChartIcon: React.VFC<BaseIconProps> = ({ id, className, size }) => {
  return <AiOutlineAreaChart id={id} className={classNames('text-center', className)} size={size} />;
};

export default ChartIcon;
