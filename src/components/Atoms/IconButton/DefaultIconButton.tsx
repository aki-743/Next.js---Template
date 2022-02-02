import { IconButton } from '@mui/material';
import { forwardRef, PropsWithChildren } from 'react';
import { BaseIconButtonProps } from '.';

const DefaultIconButton = forwardRef<HTMLAnchorElement, PropsWithChildren<BaseIconButtonProps>>(function render(
  { children, className, color = 'inherit', href, onClick },
  ref,
) {
  return (
    <IconButton className={className} ref={ref} color={color} href={href} onClick={onClick}>
      {children}
    </IconButton>
  );
});

export default DefaultIconButton;
