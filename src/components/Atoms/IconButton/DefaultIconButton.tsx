import { IconButton } from '@mui/material';
import { BaseIconButtonProps } from '.';

const DefaultIconButton: React.FC<BaseIconButtonProps> = ({ children, color = 'inherit', onClick }) => {
  return (
    <IconButton color={color} onClick={onClick}>
      {children}
    </IconButton>
  );
};

export default DefaultIconButton;
