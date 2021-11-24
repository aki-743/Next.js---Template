import { Paper } from '@mui/material';
import { BasePaperProps } from '.';

export const DefaultPaper: React.FC<BasePaperProps> = ({ children }) => {
  return <Paper>{children}</Paper>;
};

export default DefaultPaper;
