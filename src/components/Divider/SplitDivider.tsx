import { Divider } from '@material-ui/core';

export type Props = {
  /** Dividerに表示する文字 */
  splitLabel: string;
};

const SplitDivider: React.FC<Props> = ({ splitLabel }) => {
  return (
    <div className="flex">
      <div>
        <Divider />
      </div>
      <div>{splitLabel}</div>
      <div>
        <Divider />
      </div>
    </div>
  );
};

export default SplitDivider;
