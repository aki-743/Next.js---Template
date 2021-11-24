import { Popover, Typography } from '@mui/material';
import { BasePopoverProps } from '.';

const BottomPopover: React.FC<BasePopoverProps> = ({ children, open, anchorEl, width, onClose }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Typography width={width}>{children}</Typography>
    </Popover>
  );
};

export default BottomPopover;
