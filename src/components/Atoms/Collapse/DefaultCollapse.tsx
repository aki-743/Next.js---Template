import { Collapse } from '@mui/material';
import { BaseCollapseProps } from '.';

const DefaultCollapse: React.FC<BaseCollapseProps> = ({ children, open }) => {
  return <Collapse in={open}>{children}</Collapse>;
};

export default DefaultCollapse;
