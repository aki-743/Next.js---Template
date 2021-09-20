import { Divider } from '@material-ui/core';

type Props = {
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
