import { Popover, Typography } from '@mui/material';
import { forwardRef, PropsWithChildren } from 'react';
import { BasePopoverProps } from '.';

const BottomPopover = forwardRef<HTMLDivElement, PropsWithChildren<BasePopoverProps>>(function render(
  { children, id, className, open, anchorEl, width, onClose },
  ref,
) {
  return (
    <Popover
      id={id}
      className={className}
      open={open}
      ref={ref}
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
});

export default BottomPopover;
