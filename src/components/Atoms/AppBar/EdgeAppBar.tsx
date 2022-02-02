import { AppBar, Toolbar } from '@mui/material';
import classNames from 'classnames';
import { forwardRef, PropsWithChildren } from 'react';
import { BaseAppBarProps } from '.';

const EdgeAppBar = forwardRef<HTMLDivElement, PropsWithChildren<BaseAppBarProps>>(function render(
  { children, className, position = 'static' },
  ref,
) {
  return (
    <AppBar className={classNames('w-full', className)} ref={ref} position={position}>
      <Toolbar className="flex justify-between text-white">{children}</Toolbar>
    </AppBar>
  );
});

export default EdgeAppBar;
