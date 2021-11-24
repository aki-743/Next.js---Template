import { Toolbar } from '@mui/material';
import { BaseToolbarProps } from '.';

export const DefaultToolbar: React.FC<BaseToolbarProps> = ({ children }) => {
  return <Toolbar>{children}</Toolbar>;
};

export default DefaultToolbar;
