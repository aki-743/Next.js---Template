import { Divider } from '@mui/material';
import { DividerWithTextProps } from '../types/divider';

const SplitDivider: React.FC<DividerWithTextProps> = ({ text, align = 'center' }) => {
  return (
    <div>
      <Divider textAlign={align}>{text}</Divider>
    </div>
  );
};

export default SplitDivider;
