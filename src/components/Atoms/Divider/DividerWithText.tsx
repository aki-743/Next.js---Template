import { Divider } from '@mui/material';
import { DividerWithTextProps } from '../../types/Divider/props';

const DividerWithText: React.FC<DividerWithTextProps> = ({ text, align = 'center' }) => {
  return <Divider textAlign={align}>{text}</Divider>;
};

export default DividerWithText;
