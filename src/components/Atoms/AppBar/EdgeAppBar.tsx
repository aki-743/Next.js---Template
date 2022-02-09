import { AppBar, Toolbar } from '@mui/material';
import classNames from 'classnames';
import { forwardRef, PropsWithChildren } from 'react';
import { BaseAppBarProps } from '.';

const EdgeAppBar = forwardRef<HTMLDivElement, PropsWithChildren<BaseAppBarProps>>(function render(
  { children, id, className, position = 'static' },
  ref,
) {
  return (
    <AppBar id={id} className={classNames('w-full', className)} ref={ref} position={position}>
      <Toolbar className="flex justify-between text-white">{children}</Toolbar>
    </AppBar>
  );
});

export default EdgeAppBar;
